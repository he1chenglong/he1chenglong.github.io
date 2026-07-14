import { ArrowRight, ShieldCheck } from 'lucide-react';
import {
  AFFILIATE_URL,
  AFFILIATE_BANNER_URL,
  AFFILIATE_BANNER_IMG,
  AFFILIATE_BANNER_ALT,
} from '../content';
import { useScrollReveal } from '../hooks';

export default function FinalCTA() {
  const [ref, visible] = useScrollReveal();

  return (
    <section className="py-20 lg:py-28">
      <div className="container-x">
        {/* Official affiliate banner */}
        <div
          ref={ref}
          className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 mb-16 animate-on-scroll ${
            visible ? 'is-visible' : ''
          }`}
        >
          <div className="flex-1 text-center lg:text-left">
            <span className="section-eyebrow">Official Offer</span>
            <h2 className="mt-4 font-display text-2xl sm:text-3xl font-extrabold text-ink-900 text-balance">
              Web Hosting Crafted for Easy Site Management
            </h2>
            <p className="mt-4 text-ink-600 text-lg">
              SiteGround&apos;s all-in-one hosting platform gives you everything you need
              to build, secure, and scale your website — with intuitive tools that
              make management effortless.
            </p>
            <a
              href={AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="mt-6 btn-primary text-base"
            >
              Click to Learn More
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Banner image */}
          <a
            href={AFFILIATE_BANNER_URL}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl border border-ink-100 hover:scale-[1.02] transition-transform duration-300"
          >
            <img
              src={AFFILIATE_BANNER_IMG}
              alt={AFFILIATE_BANNER_ALT}
              className="w-full max-w-md"
            />
          </a>
        </div>

        {/* Final CTA band */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-600 via-brand-700 to-accent-700 px-6 py-16 lg:py-20 text-center shadow-2xl">
          {/* Decorative pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="absolute -top-10 -right-10 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-accent-300/20 rounded-full blur-3xl" />

          <div className="relative">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white text-balance">
              Ready to Launch Your Website?
            </h2>
            <p className="mt-4 text-lg text-brand-50 max-w-2xl mx-auto">
              Join the owners of 3 million+ domains who trust SiteGround. Start today
              from just $2.99/mo with a 30-day money-back guarantee.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-brand-700 font-bold text-base shadow-xl hover:bg-brand-50 hover:-translate-y-0.5 transition-all duration-300"
              >
                Start Hosting Now
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#reviews"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 text-white font-semibold text-base border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                Read Reviews
              </a>
            </div>
            <div className="mt-6 flex items-center justify-center gap-2 text-brand-50 text-sm">
              <ShieldCheck className="w-5 h-5" />
              30-day money-back guarantee — no risk, no hassle
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
