import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const footerLinks = {
  resources: [
    { label: 'Notes Library', href: '/notes' },
    { label: 'Diagram Bank', href: '/diagrams' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Exam Tips', href: '/exam-tips' },
  ],
  topics: [
    { label: 'Microeconomics', href: '/microeconomics' },
    { label: 'Macroeconomics', href: '/macroeconomics' },
    { label: 'International Trade', href: '/as-macro/international-trade' },
    { label: 'Market Failure', href: '/market-failure' },
  ],
  support: [
    { label: 'Visit Website', href: 'https://www.econnexus.com.pk', external: true },
    { label: 'Contact Us', href: 'mailto:contact@econnexus.com.pk', external: true },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Use', href: '/terms' },
  ],
};

const Footer = () => {
  return (
    <footer className="relative z-20 border-t border-silver/10">
      {/* Silver divider with glow */}
      <div className="h-px bg-gradient-to-r from-transparent via-silver/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-secondary to-indigo-glow flex items-center justify-center">
                <span className="font-sans text-lg font-bold text-primary-foreground">E</span>
              </div>
              <span className="font-sans text-xl font-bold tracking-wide text-gradient">
                EconNe<span className="text-neon-cyan drop-shadow-[0_0_8px_rgba(0,242,255,0.8)]">x</span>us
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              The Premier Gateway to Advanced Macroeconomic Mastery.
            </p>
            <a 
              href="https://www.econnexus.com.pk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-neon-cyan hover:text-neon-cyan/80 transition-colors"
            >
              www.econnexus.com.pk
              <ExternalLink className="w-3 h-3" />
            </a>
            <p className="font-serif text-xs text-silver/60 italic mt-4">
              "Economics is everywhere, and understanding it can help you make better decisions."
            </p>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-serif text-sm font-semibold text-silver-bright uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-silver-bright transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Topics */}
          <div>
            <h3 className="font-serif text-sm font-semibold text-silver-bright uppercase tracking-wider mb-4">
              Topics
            </h3>
            <ul className="space-y-3">
              {footerLinks.topics.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-silver-bright transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-serif text-sm font-semibold text-silver-bright uppercase tracking-wider mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  {(link as any).external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-silver-bright transition-colors duration-300"
                    >
                      {link.label}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-silver-bright transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-silver/10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <p className="font-sans text-xs text-silver/40 tracking-wide">
              © 2026 EconNe<span className="text-neon-cyan/60">x</span>us | Advanced Macroeconomic Portal
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
