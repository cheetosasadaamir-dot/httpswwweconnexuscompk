import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import EconNexusLogo from './EconNexusLogo';

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
    { label: 'Terms & Conditions', href: '/terms' },
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
            <div className="mb-4">
              <EconNexusLogo size="lg" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-1">
              The Central Intelligence for Global Academia.
            </p>
            <p className="text-xs text-[#D4AF37]/60 italic mb-4">Driven by the Agentic Ecosystem.</p>
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
              "Mastery is no longer a choice—it is an architecture. From A-Level foundations to University-level complexity, the Nexus is your unified cognitive advantage."
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
          <div className="flex flex-col items-center justify-center gap-3">
            <EconNexusLogo size="lg" linkHome={false} />
            <p className="text-xs text-[#D4AF37]/50 tracking-widest uppercase">Agentic Ecosystem</p>
            <p className="font-sans text-xs text-silver/40 tracking-wide">
              © 2026 EconNexus | Global Academia Portal
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
