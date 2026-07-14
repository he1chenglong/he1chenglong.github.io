import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS, AFFILIATE_URL } from '../content';
import { useScrollReveal } from '../hooks';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [ref, visible] = useScrollReveal();

  return (
    <section id="faq" className="py-20 lg:py-28 bg-ink-50/50">
      <div className="container-x max-w-3xl">
        <div className="text-center mb-14">
          <span className="section-eyebrow">FAQ</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold text-ink-900 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-ink-600 text-lg">
            Everything you need to know before getting started.
          </p>
        </div>

        <div
          ref={ref}
          className={`space-y-4 animate-on-scroll ${visible ? 'is-visible' : ''}`}
        >
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? 'bg-white border-brand-200 shadow-lg'
                    : 'bg-white border-ink-100 hover:border-ink-200'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-ink-900 text-base sm:text-lg">
                    {item.question}
                  </span>
                  <span
                    className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
                      isOpen
                        ? 'bg-brand-500 text-white rotate-180'
                        : 'bg-ink-100 text-ink-500'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-60' : 'max-h-0'
                  }`}
                >
                  <p className="px-5 pb-5 text-ink-600 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-10 text-center">
          <p className="text-ink-600">
            Still have questions?{' '}
            <a
              href={AFFILIATE_URL}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="text-brand-600 font-semibold hover:text-brand-700 underline underline-offset-2"
            >
              Talk to SiteGround&apos;s support team
            </a>{' '}
            — they&apos;re available 24/7.
          </p>
        </div>
      </div>
    </section>
  );
}
