import { useEffect, useRef } from 'react';
import { MessageSquare } from 'lucide-react';

/**
 * Disqus comment section for user-generated content (UGC).
 * Replace DISQUS_SHORTNAME with your own Disqus site shortname.
 *
 * Why this matters: SiteGround's affiliate review checks for "user-generated
 * content" — i.e. real visitors leaving comments. A Disqus embed provides
 * this capability even before the first comment arrives.
 */
const DISQUS_SHORTNAME = 'hostscout';

export default function Comments() {
  const containerRef = useRef<HTMLDivElement>(null);
  const loadedRef = useRef(false);

  useEffect(() => {
    if (loadedRef.current) return;
    loadedRef.current = true;

    const script = document.createElement('script');
    script.src = `https://${DISQUS_SHORTNAME}.disqus.com/embed.js`;
    script.setAttribute('data-timestamp', Date.now().toString());
    script.async = true;

    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <section className="py-20 lg:py-28 bg-ink-50/50">
      <div className="container-x max-w-3xl">
        <div className="text-center mb-10">
          <span className="section-eyebrow">Join the Discussion</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold text-ink-900 text-balance">
            Share Your SiteGround Experience
          </h2>
          <p className="mt-4 text-ink-600 text-lg">
            Have you used SiteGround? Leave a comment below — your feedback helps
            others choose the right host.
          </p>
        </div>

        <div className="card p-7">
          <div className="flex items-center gap-3 mb-5 pb-5 border-b border-ink-100">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-100 text-brand-600">
              <MessageSquare className="w-5 h-5" />
            </span>
            <div>
              <h3 className="font-display font-bold text-ink-900">Comments</h3>
              <p className="text-sm text-ink-500">Powered by Disqus</p>
            </div>
          </div>

          <div ref={containerRef}>
            <div id="disqus_thread" className="min-h-[200px]" />
            <noscript>
              <p className="text-sm text-ink-500 text-center py-8">
                Please enable JavaScript to view the comments powered by Disqus.
              </p>
            </noscript>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-ink-400">
          Comments are moderated and powered by Disqus. By commenting, you agree to
          Disqus&apos;s terms of service.
        </p>
      </div>
    </section>
  );
}
