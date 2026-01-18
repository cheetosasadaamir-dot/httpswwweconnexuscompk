import { Link } from 'react-router-dom';

const footerLinks = {
  resources: [
    { label: 'Notes Library', href: '/market-structures' },
    { label: 'Diagram Bank', href: '/diagrams' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Exam Tips', href: '/exam-tips' },
  ],
  topics: [
    { label: 'Microeconomics', href: '/market-structures' },
    { label: 'Macroeconomics', href: '/economic-growth' },
    { label: 'International Trade', href: '/trade-theory' },
    { label: 'Market Failure', href: '/market-failure' },
  ],
  support: [
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
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
                <span className="font-serif text-lg font-bold text-primary-foreground">E</span>
              </div>
              <span className="font-serif text-xl font-semibold text-gradient">EconNexus</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Advanced A2 Economics Mastery. 
              Designed for clarity, built for top grades.
            </p>
            <p className="font-serif text-xs text-silver/60 italic">
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
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-silver/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-serif text-xs text-silver/50">
              © 2026 EconNexus. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-xs text-muted-foreground">
                Built with passion for education
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
