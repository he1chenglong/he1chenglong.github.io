import { Check } from 'lucide-react';
import { DEEP_DIVES } from '../content';
import { useScrollReveal } from '../hooks';

function DeepDiveItem({
  dive,
  index,
}: {
  dive: (typeof DEEP_DIVES)[number];
  index: number;
}) {
  const [ref, visible] = useScrollReveal();
  const Icon = dive.icon;

  return (
    <div
      ref={ref}
      className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center animate-on-scroll ${
        visible ? 'is-visible' : ''
      } ${dive.reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* Text */}
      <div>
        <span className="section-eyebrow">{dive.eyebrow}</span>
        <h3 className="mt-4 font-display text-2xl sm:text-3xl font-extrabold text-ink-900 text-balance">
          {dive.title}
        </h3>
        <p className="mt-4 text-ink-600 text-lg leading-relaxed">{dive.description}</p>
        <ul className="mt-6 space-y-3">
          {dive.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3">
              <span className="flex-shrink-0 mt-0.5 flex items-center justify-center w-5 h-5 rounded-full bg-brand-100 text-brand-600">
                <Check className="w-3.5 h-3.5" strokeWidth={3} />
              </span>
              <span className="text-ink-700">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Visual */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-400/20 to-accent-400/20 rounded-3xl blur-2xl" />
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-ink-100 aspect-[4/3]">
          <img
            src={dive.image}
            alt={dive.title}
            loading="lazy"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 flex items-center gap-3">
            <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/90 backdrop-blur text-brand-600 shadow-lg">
              <Icon className="w-6 h-6" strokeWidth={2} />
            </span>
            <span className="text-white font-display font-semibold text-sm drop-shadow">
              {dive.eyebrow}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Performance() {
  return (
    <section id="performance" className="py-20 lg:py-28">
      <div className="container-x">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="section-eyebrow">Under the Hood</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold text-ink-900 text-balance">
            Built on Technology That Outperforms
          </h2>
          <p className="mt-4 text-ink-600 text-lg">
            SiteGround doesn&apos;t just use off-the-shelf servers. Every layer of the
            stack is custom-engineered for speed, security, and reliability.
          </p>
        </div>

        <div className="space-y-20 lg:space-y-28">
          {DEEP_DIVES.map((dive, i) => (
            <DeepDiveItem key={dive.title} dive={dive} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
