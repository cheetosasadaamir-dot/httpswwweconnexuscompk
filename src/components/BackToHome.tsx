import { Link, useLocation } from 'react-router-dom';
import { Home } from 'lucide-react';

/**
 * Discreet in-flow "Back to Home" control shown on every page except the
 * homepage. Sits in the document flow so it never overlaps page content.
 */
const BackToHome = ({ className = '' }: { className?: string }) => {
  const { pathname } = useLocation();
  if (pathname === '/') return null;

  return (
    <div className={`w-[95%] max-w-[1200px] mx-auto px-4 md:px-6 pt-2 pb-1 ${className}`}>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/12 bg-white/[0.04] text-[11px] uppercase tracking-[0.18em] text-muted-foreground hover:text-neon-cyan hover:border-neon-cyan/40 transition-colors"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        <Home className="w-3.5 h-3.5" /> Back to Home
      </Link>
    </div>
  );
};

export default BackToHome;
