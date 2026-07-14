import { Quote, ExternalLink } from 'lucide-react';
import { TESTIMONIALS, TESTIMONIALS_SOURCE_URL, TRUST_LOGOS } from '../content';
import { useScrollReveal } from '../hooks';

function TestimonialCard({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  return (
    <div className="card p-7 flex flex-col">
      <Quote className="w-8 h-8 text-brand-200 mb-3 flex-shrink-0" />
      <p className="text-ink-700 leading-relaxed flex-grow">{t.quote}</p>
      <div className="mt-6 pt-5 border-t border-ink-100">
        <div className="font-semibold text-ink-900">{t.business}</div>
        <div className="text-sm text-ink-500">{t.role}</div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [ref, visible] = useScrollReveal();

  return (
    <section id="reviews" className="py-20 lg:py-28">
      <div className="container-x">
        {/* Trust bar */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {TRUST_LOGOS.map((logo) => (
              <span
                key={logo}
                className="text-sm font-semibold text-ink-400 uppercase tracking-wider"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>

        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="section-eyebrow">Customer Stories</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold text-ink-900 text-balance">
            What SiteGround Customers Say
          </h2>
          <p className="mt-4 text-ink-600 text-lg">
            Real feedback from businesses that run on SiteGround, published on
            SiteGround&apos;s official client stories.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid sm:grid-cols-2 gap-6 animate-on-scroll ${
            visible ? 'is-visible' : ''
          }`}
        >
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.business} t={t} />
          ))}
        </div>

        {/* Source attribution */}
        <div className="mt-8 text-center">
          <a
            href={TESTIMONIALS_SOURCE_URL}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-1.5 text-sm text-ink-500 hover:text-brand-600 transition-colors"
          >
            Source: SiteGround client stories
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
