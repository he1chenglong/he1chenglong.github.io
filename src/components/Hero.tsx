import { ArrowRight, CheckCircle2, Star, ShieldCheck, Zap, Headphones } from 'lucide-react';
import { AFFILIATE_URL, HERO_STATS } from '../content';
import { useCountUp } from '../hooks';

function StatItem({ value, suffix, label }: (typeof HERO_STATS)[number]) {
  const [ref, current] = useCountUp(value);
  const isFloat = value % 1 !== 0;
  const display = isFloat ? current.toFixed(2) : current.toLocaleString();

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-3xl sm:text-4xl font-extrabold gradient-text">
        {display}
        <span className="text-brand-600">{suffix}</span>
      </div>
      <div className="mt-1 text-sm text-ink-500 font-medium">{label}</div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative hero-gradient pt-28 lg:pt-36 pb-20 lg:pb-28 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 -right-20 w-72 h-72 bg-brand-300/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 -left-20 w-80 h-80 bg-accent-300/20 rounded-full blur-3xl animate-pulse-slow" />

      <div className="container-x relative">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur border border-brand-200 text-brand-700 text-sm font-semibold mb-6 animate-fade-in">
            <Star className="w-4 h-4 fill-brand-500 text-brand-500" />
            Rated #1 Web Hosting by 2.8M+ Users
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink-900 leading-[1.1] text-balance animate-fade-up">
            Web Hosting That&apos;s
            <span className="gradient-text"> Fast, Secure</span>
            <br className="hidden sm:block" /> &amp; Effortless
          </h1>

          <p
            className="mt-6 text-lg text-ink-600 leading-relaxed max-w-2xl mx-auto animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            SiteGround delivers lightning-fast speeds, AI-powered security, and 24/7
            expert support trusted by over 2.8 million websites. Start from just{' '}
            <span className="font-semibold text-ink-900">$2.99/mo</span> with a 30-day
            money-back guarantee.
          </p>

          {/* CTAs */}
          <div
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            <a
              href={AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="btn-primary text-base px-8 py-4"
            >
              Start Hosting Now
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#features" className="btn-secondary text-base px-8 py-4">
              Explore Features
            </a>
          </div>

          {/* Affiliate disclosure near CTA (FTC compliance) */}
          <p
            className="mt-4 text-xs text-ink-400 max-w-xl mx-auto animate-fade-in"
            style={{ animationDelay: '0.25s' }}
          >
            As an affiliate, HostScout may earn a commission from qualifying purchases at
            no extra cost to you.
          </p>

          {/* Trust badges */}
          <div
            className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-ink-500 animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          >
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-brand-500" /> 30-day money-back
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-brand-500" /> Free site migration
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-brand-500" /> Free SSL &amp; CDN
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Headphones className="w-4 h-4 text-brand-500" /> 24/7 human support
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {HERO_STATS.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
