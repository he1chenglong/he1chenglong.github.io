import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS, TRUST_LOGOS } from '../content';
import { useScrollReveal } from '../hooks';

function TestimonialCard({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  return (
    <div className="card p-7 flex flex-col">
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-brand-500 text-brand-500" />
        ))}
      </div>
      <Quote className="w-8 h-8 text-brand-200 mb-3 flex-shrink-0" />
      <p className="text-ink-700 leading-relaxed flex-grow">{t.quote}</p>
      <div className="mt-6 flex items-center gap-3 pt-5 border-t border-ink-100">
        <img
          src={t.avatar}
          alt={t.name}
          loading="lazy"
          className="w-12 h-12 rounded-full object-cover border-2 border-brand-100"
        />
        <div>
          <div className="font-semibold text-ink-900">{t.name}</div>
          <div className="text-sm text-ink-500">{t.role}</div>
        </div>
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
          <span className="section-eyebrow">Customer Reviews</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold text-ink-900 text-balance">
            Loved by Developers, Bloggers &amp; Agencies
          </h2>
          <p className="mt-4 text-ink-600 text-lg">
            Join 2.8 million website owners who trust SiteGround to keep their sites
            fast, secure, and always online.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-on-scroll ${
            visible ? 'is-visible' : ''
          }`}
        >
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
