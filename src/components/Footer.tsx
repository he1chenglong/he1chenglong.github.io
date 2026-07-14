import { Info } from 'lucide-react';
import {
  FOOTER_LINKS,
  FOOTER_RESOURCES,
  FOOTER_COMPANY,
} from '../content';

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-ink-300 pt-16 pb-8">
      <div className="container-x">
        {/* Affiliate disclosure */}
        <div className="mb-12 p-5 rounded-xl bg-ink-800 border border-ink-700 flex items-start gap-3">
          <Info className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-ink-400 leading-relaxed">
            <span className="font-semibold text-ink-200">Affiliate Disclosure:</span>{' '}
            This page contains affiliate links. If you purchase through these links, we
            may earn a commission at no additional cost to you. We only recommend
            products we trust and believe will add value to our readers.
          </p>
        </div>

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
