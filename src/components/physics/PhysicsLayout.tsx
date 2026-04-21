import { ReactNode, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Atom, Zap, Waves, Orbit, ChevronDown, ChevronRight,
  Maximize2, Minimize2, Menu, X, Home, ArrowLeft,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { physicsTopics } from '@/data/physicsTopics';

interface PhysicsLayoutProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
}

const topicIcons = { mechanics: Atom, electricity: Zap, waves: Waves, quantum: Orbit };

const PhysicsLayout = ({ children, title, subtitle }: PhysicsLayoutProps) => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [focusMode, setFocusMode] = useState(false);
  const [expanded, setExpanded] = useState<string[]>(() => {
    // Auto-expand the topic group containing the current route
    const found = physicsTopics.find(t =>
      t.subtopics.some(s => s.href === location.pathname)
    );
    return found ? [found.id] : ['mechanics'];
  });

  useEffect(() => {
    const found = physicsTopics.find(t =>
      t.subtopics.some(s => s.href === location.pathname)
    );
    if (found && !expanded.includes(found.id)) {
      setExpanded(p => [...p, found.id]);
    }
    setSidebarOpen(false);
  }, [location.pathname]); // eslint-disable-line

  const toggleGroup = (id: string) =>
    setExpanded(p => (p.includes(id) ? p.filter(x => x !== id) : [...p, id]));

  return (
    <div className="min-h-screen bg-background relative">
      {/* High-tech background gradient — physics palette */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_hsl(214_100%_18%)_0%,_hsl(210_100%_8%)_60%,_hsl(210_100%_5%)_100%)]" />
      <div className="fixed inset-0 -z-10 opacity-[0.03] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:48px_48px]" />

      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-primary/15 bg-background/70 backdrop-blur-xl">
        <div className="flex items-center justify-between px-3 md:px-5 h-14">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSidebarOpen(v => !v)}
              className="md:hidden p-2 rounded-lg hover:bg-primary/10 text-foreground"
              aria-label="Toggle topics"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <Link to="/physics" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/40 flex items-center justify-center shadow-[0_0_20px_hsl(214_100%_61%/0.4)]">
                <Atom className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="hidden sm:block">
                <div className="font-serif text-sm font-bold text-foreground leading-none">
                  Physics Hub
                </div>
                <div className="text-[10px] text-muted-foreground tracking-wider uppercase font-mono">
                  Science Mode · A-Level / Uni
                </div>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-1.5">
            <Link
              to="/"
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg border border-primary/20 hover:bg-primary/10 text-muted-foreground hover:text-foreground transition"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Econ
            </Link>
            <button
              onClick={() => setFocusMode(v => !v)}
              className={cn(
                'flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg border transition',
                focusMode
                  ? 'border-primary bg-primary/15 text-primary'
                  : 'border-primary/20 hover:bg-primary/10 text-muted-foreground hover:text-foreground'
              )}
              title="Toggle focus mode"
            >
              {focusMode ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{focusMode ? 'Exit Focus' : 'Focus Mode'}</span>
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <AnimatePresence initial={false}>
          {!focusMode && (
            <motion.aside
              key="sidebar"
              initial={{ x: -20, opacity: 0, width: 0 }}
              animate={{ x: 0, opacity: 1, width: 'auto' }}
              exit={{ x: -20, opacity: 0, width: 0 }}
              transition={{ duration: 0.25 }}
              className={cn(
                'border-r border-primary/15 bg-background/60 backdrop-blur-xl',
                'fixed md:sticky top-14 left-0 z-30',
                'h-[calc(100vh-3.5rem)] overflow-y-auto',
                'w-72 md:w-64 lg:w-72',
                sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0',
                'transition-transform duration-300'
              )}
            >
              <nav className="p-3 md:p-4 space-y-1">
                <Link
                  to="/physics"
                  className={cn(
                    'flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm transition',
                    location.pathname === '/physics'
                      ? 'bg-primary/15 text-primary border border-primary/30'
                      : 'text-muted-foreground hover:text-foreground hover:bg-primary/5'
                  )}
                >
                  <Home className="w-4 h-4" />
                  <span className="font-medium">Physics Home</span>
                </Link>

                {physicsTopics.map(topic => {
                  const Icon = topicIcons[topic.id as keyof typeof topicIcons];
                  const isOpen = expanded.includes(topic.id);
                  const hasActive = topic.subtopics.some(s => s.href === location.pathname);
                  return (
                    <div key={topic.id} className="mt-2">
                      <button
                        onClick={() => toggleGroup(topic.id)}
                        className={cn(
                          'w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm transition',
                          hasActive
                            ? 'text-primary'
                            : 'text-foreground/85 hover:text-foreground hover:bg-primary/5'
                        )}
                      >
                        <Icon className="w-4 h-4 shrink-0" />
                        <span className="flex-1 text-left font-semibold text-[13px]">
                          {topic.title}
                        </span>
                        {isOpen ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden ml-3 mt-1 pl-3 border-l border-primary/15 space-y-0.5"
                          >
                            {topic.subtopics.map(sub => {
                              const active = location.pathname === sub.href;
                              return (
                                <li key={sub.href}>
                                  <Link
                                    to={sub.href}
                                    className={cn(
                                      'block px-3 py-1.5 rounded-md text-xs transition',
                                      active
                                        ? 'text-primary bg-primary/10 font-medium'
                                        : 'text-muted-foreground hover:text-foreground hover:bg-primary/5'
                                    )}
                                  >
                                    {sub.title}
                                  </Link>
                                </li>
                              );
                            })}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </nav>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Main content */}
        <main className={cn('flex-1 min-w-0', sidebarOpen && 'md:ml-0')}>
          <div className={cn('mx-auto px-4 md:px-8 py-6 md:py-10', focusMode ? 'max-w-4xl' : 'max-w-5xl')}>
            {(title || subtitle) && (
              <motion.header
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
              >
                {title && (
                  <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                    {title}
                  </h1>
                )}
                {subtitle && (
                  <p className="mt-2 text-muted-foreground text-sm md:text-base max-w-2xl">
                    {subtitle}
                  </p>
                )}
                <div className="mt-4 h-0.5 w-16 bg-gradient-to-r from-primary to-transparent rounded-full" />
              </motion.header>
            )}
            <div className="space-y-6 md:space-y-8">{children}</div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PhysicsLayout;
