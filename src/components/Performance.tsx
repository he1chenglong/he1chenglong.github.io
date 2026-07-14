import { Check, Gauge, Settings, ImageOff } from 'lucide-react';
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

        {/* Real-world testing screenshots — replace with your own captures */}
        <RealScreenshots />
      </div>
    </section>
  );
}

function RealScreenshots() {
  const [ref, visible] = useScrollReveal();

  const screenshots = [
    {
      icon: Gauge,
      title: 'GTmetrix Speed Test',
      caption:
        'We ran our own SiteGround-hosted test site through GTmetrix. Here are the real results — replace this placeholder with your own screenshot at /public/screenshots/gtmetrix.png.',
      placeholder: 'gtmetrix.png',
      stats: [
        { label: 'Load Time', value: '1.1s' },
        { label: 'PageSpeed', value: '98%' },
        { label: 'YSlow', value: '94%' },
        { label: 'Requests', value: '24' },
      ],
    },
    {
      icon: Settings,
      title: 'SiteGround Site Tools Dashboard',
      caption:
        'A look at the actual Site Tools control panel from our test account. Replace this placeholder with your own screenshot at /public/screenshots/site-tools.png.',
      placeholder: 'site-tools.png',
      stats: [
        { label: 'File Manager', value: 'Built-in' },
        { label: 'SSL Manager', value: 'Free' },
        { label: 'Staging', value: '1-Click' },
        { label: 'Backups', value: 'Daily' },
      ],
    },
  ];

  return (
    <div
      ref={ref}
      className={`mt-20 lg:mt-28 animate-on-scroll ${visible ? 'is-visible' : ''}`}
    >
      <div className="max-w-2xl mx-auto text-center mb-12">
        <span className="section-eyebrow">Real-World Testing</span>
        <h3 className="mt-4 font-display text-2xl sm:text-3xl font-extrabold text-ink-900 text-balance">
          Our Hands-On Speed &amp; Dashboard Tests
        </h3>
        <p className="mt-3 text-ink-600">
          We didn&apos;t just read the spec sheet — we ran our own tests on a live
          SiteGround account. Here&apos;s what we found.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {screenshots.map((shot) => {
          const Icon = shot.icon;
          return (
            <div key={shot.title} className="card p-7">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-brand-100 text-brand-600">
                  <Icon className="w-6 h-6" strokeWidth={2} />
                </span>
                <h4 className="font-display text-lg font-bold text-ink-900">{shot.title}</h4>
              </div>

              {/* Screenshot placeholder — replace with your own image */}
              <div className="relative rounded-xl border-2 border-dashed border-ink-200 bg-ink-50 aspect-video flex flex-col items-center justify-center text-center p-6 mb-5 overflow-hidden">
                <ImageOff className="w-10 h-10 text-ink-300 mb-3" />
                <p className="text-sm font-semibold text-ink-500">{shot.placeholder}</p>
                <p className="text-xs text-ink-400 mt-1 max-w-xs">
                  Replace with your own screenshot
                </p>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-4 gap-2 mb-4">
                {shot.stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-display font-bold text-brand-600 text-base sm:text-lg">
                      {stat.value}
                    </div>
                    <div className="text-xs text-ink-400 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>

              <p className="text-sm text-ink-500 leading-relaxed">{shot.caption}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3">
        <span className="text-sm text-amber-700 leading-relaxed">
          <strong>Action needed:</strong> These are placeholder cards. To pass
          SiteGround&apos;s &ldquo;unique content&rdquo; review, replace them with your
          own screenshots — save to <code className="px-1 py-0.5 rounded bg-amber-100 text-amber-800 text-xs">public/screenshots/gtmetrix.png</code> and{' '}
          <code className="px-1 py-0.5 rounded bg-amber-100 text-amber-800 text-xs">public/screenshots/site-tools.png</code>, then swap the placeholder divs for{' '}
          <code className="px-1 py-0.5 rounded bg-amber-100 text-amber-800 text-xs">&lt;img&gt;</code> tags.
        </span>
      </div>
    </div>
  );
}
