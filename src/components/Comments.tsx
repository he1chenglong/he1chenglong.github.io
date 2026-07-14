import { useEffect, useRef } from 'react';
import { MessageSquare } from 'lucide-react';

/**
 * Lightweight user-generated content via giscus (GitHub Discussions).
 *
 * Lighter than Disqus: one small script, no ads, no third-party tracking,
 * and comments are stored in THIS repo's GitHub Discussions (data you own).
 *
 * One-time setup to activate:
 *   1. Repo Settings → General → Features → enable "Discussions".
 *   2. Install the giscus GitHub App: https://github.com/apps/giscus
 *      (grant it access to this repo).
 *   3. Go to https://giscus.app, enter the repo below, pick a Discussion
 *      category, and copy the generated `data-repo-id` and `data-category-id`.
 *   4. Paste those two values into REPO_ID and CATEGORY_ID below.
 *
 * Until REPO_ID and CATEGORY_ID are filled in, this section renders nothing
 * (no broken/empty comment box appears on the live page).
 */
const REPO = 'he1chenglong/he1chenglong.github.io';
const REPO_ID = ''; // e.g. 'R_kgDO...'
const CATEGORY = 'General';
const CATEGORY_ID = ''; // e.g. 'DIC_kwDO...'

const isConfigured = REPO_ID !== '' && CATEGORY_ID !== '';

export default function Comments() {
  const containerRef = useRef<HTMLDivElement>(null);
  const loadedRef = useRef(false);

  useEffect(() => {
    if (!isConfigured || loadedRef.current || !containerRef.current) return;
    loadedRef.current = true;

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', REPO);
    script.setAttribute('data-repo-id', REPO_ID);
    script.setAttribute('data-category', CATEGORY);
    script.setAttribute('data-category-id', CATEGORY_ID);
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'top');
    script.setAttribute('data-theme', 'light');
    script.setAttribute('data-lang', 'en');
    script.crossOrigin = 'anonymous';
    script.async = true;

    containerRef.current.appendChild(script);
  }, []);

  // Don't render an empty/broken section before giscus is configured.
  if (!isConfigured) return null;

  return (
    <section className="py-20 lg:py-28">
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
              <p className="text-sm text-ink-500">
                Powered by GitHub Discussions (giscus)
              </p>
            </div>
          </div>

          <div ref={containerRef} className="giscus min-h-[200px]" />
        </div>

        <p className="mt-4 text-center text-xs text-ink-400">
          Sign in with GitHub to comment. Comments are stored in this
          site&apos;s public GitHub Discussions.
        </p>
      </div>
    </section>
  );
}
