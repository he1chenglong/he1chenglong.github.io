import { useEffect, useState } from 'react';
import { Menu, X, Server } from 'lucide-react';
import { NAV_LINKS, AFFILIATE_URL } from '../content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="container-x flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-accent-600 text-white shadow-lg shadow-brand-500/30 group-hover:scale-110 transition-transform">
            <Server className="w-5 h-5" strokeWidth={2.5} />
          </span>
          <span className="font-display font-extrabold text-lg tracking-tight text-ink-900">
            Host<span className="text-brand-600">Scout</span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="btn-ghost text-sm">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="btn-primary text-sm"
          >
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 rounded-lg text-ink-700 hover:bg-ink-100 transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-white border-b border-ink-100 ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul className="container-x py-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-ink-700 hover:bg-brand-50 hover:text-brand-700 font-medium transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer sponsored"
              onClick={() => setOpen(false)}
              className="btn-primary w-full"
            >
              Get Started
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
