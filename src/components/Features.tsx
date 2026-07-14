import { FEATURES } from '../content';
import { useScrollReveal } from '../hooks';

export default function Features() {
  const [ref, visible] = useScrollReveal();

  return (
    <section id="features" className="py-20 lg:py-28 bg-ink-50/50">
      <div className="container-x">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="section-eyebrow">Why SiteGround</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold text-ink-900 text-balance">
            Everything You Need to Build &amp; Grow Online
          </h2>
          <p className="mt-4 text-ink-600 text-lg">
            From blazing speed to ironclad security, SiteGround packs every essential
            into one powerful, beginner-friendly platform.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-on-scroll ${
            visible ? 'is-visible' : ''
          }`}
        >
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="card p-7 group">
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.accent} text-white shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
                >
                  <Icon className="w-7 h-7" strokeWidth={2} />
                </div>
                <h3 className="font-display text-xl font-bold text-ink-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-ink-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
