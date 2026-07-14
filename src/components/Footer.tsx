import {
  FOOTER_LINKS,
  FOOTER_RESOURCES,
  FOOTER_COMPANY,
} from '../content';

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-ink-300 pt-16 pb-8">
      <div className="container-x">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 pb-12 border-b border-ink-800">
          {/* Navigation */}
          <div>
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-4">
              Navigate
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ink-400 hover:text-brand-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-4">
              Hosting Types
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_RESOURCES.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="text-sm text-ink-400 hover:text-brand-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-4">
              About
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_COMPANY.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="text-sm text-ink-400 hover:text-brand-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8">
          <p className="text-sm text-ink-500">
            &copy; {new Date().getFullYear()} HostScout. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
