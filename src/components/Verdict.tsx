import { ThumbsUp, AlertCircle, Info } from 'lucide-react';
import {
  VERDICT_SUMMARY,
  VERDICT_PROS,
  VERDICT_CONS,
  VERDICT_METHOD,
} from '../content';
import { useScrollReveal } from '../hooks';

export default function Verdict() {
  const [ref, visible] = useScrollReveal();

  return (
    <section id="verdict" className="py-20 lg:py-28 bg-ink-50/50">
      <div className="container-x">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="section-eyebrow">Our Verdict</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold text-ink-900 text-balance">
            Is SiteGround Worth It? Our Honest Take
          </h2>
        </div>

        <div
          ref={ref}
          className={`max-w-4xl mx-auto animate-on-scroll ${visible ? 'is-visible' : ''}`}
        >
          <p className="text-lg text-ink-700 leading-relaxed text-center mb-12">
            {VERDICT_SUMMARY}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Pros */}
            <div className="card p-7">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-100 text-brand-600">
                  <ThumbsUp className="w-5 h-5" />
                </span>
                <h3 className="font-display font-bold text-ink-900 text-lg">
                  What stands out
                </h3>
              </div>
              <ul className="space-y-3">
                {VERDICT_PROS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink-700">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons */}
            <div className="card p-7">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-100 text-amber-600">
                  <AlertCircle className="w-5 h-5" />
                </span>
                <h3 className="font-display font-bold text-ink-900 text-lg">
                  Worth knowing before you buy
                </h3>
              </div>
              <ul className="space-y-3">
                {VERDICT_CONS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink-700">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Methodology — signals original, honest editorial */}
          <div className="mt-6 p-5 rounded-xl bg-white border border-ink-100 flex items-start gap-3">
            <Info className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-ink-500 leading-relaxed">{VERDICT_METHOD}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
