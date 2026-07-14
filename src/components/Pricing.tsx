import { useState } from 'react';
import { Check, ArrowRight, Star, ShieldCheck } from 'lucide-react';
import { PLANS, AFFILIATE_URL } from '../content';
import { useScrollReveal } from '../hooks';

export default function Pricing() {
  const [annual, setAnnual] = useState(true);
  const [ref, visible] = useScrollReveal();

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-ink-50/50">
      <div className="container-x">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="section-eyebrow">Pricing Plans</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold text-ink-900 text-balance">
            Choose the Plan That Fits Your Site
          </h2>
          <p className="mt-4 text-ink-600 text-lg">
            Transparent pricing with no hidden fees. All plans include a 30-day
            money-back guarantee.
          </p>
        </div>

        {/* Billing toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span
            className={`text-sm font-semibold transition-colors ${
              !annual ? 'text-ink-900' : 'text-ink-400'
            }`}
          >
            Monthly
          </span>
          <button
            onClick={() => setAnnual((v) => !v)}
            className="relative w-14 h-7 rounded-full bg-ink-200 transition-colors"
            aria-label="Toggle billing period"
          >
            <span
              className={`absolute top-1 w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-300 ${
                annual ? 'translate-x-8 bg-brand-500' : 'translate-x-1'
              }`}
            />
          </button>
          <span
            className={`text-sm font-semibold transition-colors ${
              annual ? 'text-ink-900' : 'text-ink-400'
            }`}
          >
            Annual
            <span className="ml-2 px-2 py-0.5 rounded-full bg-brand-100 text-brand-700 text-xs font-bold">
              Save up to 70%
            </span>
          </span>
        </div>

        {/* Cards */}
        <div
          ref={ref}
          className={`grid md:grid-cols-3 gap-6 lg:gap-8 items-start animate-on-scroll ${
            visible ? 'is-visible' : ''
          }`}
        >
          {PLANS.map((plan) => {
            const price = annual ? plan.annual : plan.monthly ?? plan.annualRenew;
            const period = annual ? '/mo' : '/mo';

            return (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-ink-900 text-white shadow-2xl scale-105 lg:scale-110 border-2 border-brand-500'
                    : 'bg-white text-ink-800 shadow-lg hover:shadow-xl hover:-translate-y-1 border border-ink-100'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-brand-500 to-accent-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg">
                    {plan.badge}
                  </div>
                )}

                <h3 className="font-display text-2xl font-extrabold">{plan.name}</h3>
                <p
                  className={`mt-1 text-sm ${
                    plan.highlighted ? 'text-ink-300' : 'text-ink-500'
                  }`}
                >
                  {plan.tagline}
                </p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold font-display">
                    ${price.toFixed(2)}
                  </span>
                  <span
                    className={`text-sm ${plan.highlighted ? 'text-ink-400' : 'text-ink-500'}`}
                  >
                    {period}
                  </span>
                </div>
                {annual && (
                  <p
                    className={`mt-1 text-xs ${plan.highlighted ? 'text-ink-400' : 'text-ink-400'}`}
                  >
                    <span className="line-through">${plan.original.toFixed(2)}</span>{' '}
                    intro price, renews at ${plan.annualRenew.toFixed(2)}/mo
                  </p>
                )}

                <a
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className={`mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-brand-500 text-white hover:bg-brand-400 shadow-lg shadow-brand-500/30'
                      : 'bg-ink-900 text-white hover:bg-ink-800'
                  }`}
                >
                  Choose {plan.name}
                  <ArrowRight className="w-4 h-4" />
                </a>

                <ul className="mt-7 space-y-3">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3 text-sm">
                      <span
                        className={`flex-shrink-0 mt-0.5 flex items-center justify-center w-5 h-5 rounded-full ${
                          plan.highlighted
                            ? 'bg-brand-500/20 text-brand-400'
                            : 'bg-brand-100 text-brand-600'
                        }`}
                      >
                        <Check className="w-3.5 h-3.5" strokeWidth={3} />
                      </span>
                      <span className={plan.highlighted ? 'text-ink-200' : 'text-ink-700'}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Trust note */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-ink-500">
          <span className="inline-flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-brand-500" />
            30-day money-back guarantee
          </span>
          <span className="hidden sm:block text-ink-300">|</span>
          <span className="inline-flex items-center gap-2">
            <Star className="w-5 h-5 text-brand-500 fill-brand-500" />
            No hidden fees, cancel anytime
          </span>
        </div>
      </div>
    </section>
  );
}
