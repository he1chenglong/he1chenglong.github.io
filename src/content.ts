import {
  Gauge,
  ShieldCheck,
  Headphones,
  Rocket,
  Globe,
  Server,
  Zap,
  Lock,
  RefreshCw,
  LifeBuoy,
  Database,
  Code2,
  type LucideIcon,
} from 'lucide-react';

export const AFFILIATE_URL =
  'https://www.siteground.com/index.htm?afcode=a34d395f092b9f150b5775e67d5fffc8';

// Official SiteGround banner destination (afimagecode-tracked). Do NOT alter
// the URL, image src, or alt text — SG requires the banner be used as-is.
export const AFFILIATE_BANNER_URL =
  'https://siteground.com/web-hosting.htm?afimagecode=077adbdd382db0a6b44d2c81bd91d99b';

export const AFFILIATE_BANNER_IMG =
  'https://siteground.com/static/affiliate/en/NOPRICE/general_EN_general-hosting-square-light.jpg';

export const AFFILIATE_BANNER_ALT =
  'Ad - Web Hosting from SiteGround - Crafted for easy site management. Click to learn more.';

export const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Performance', href: '#performance' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Verdict', href: '#verdict' },
  { label: 'FAQ', href: '#faq' },
];

export const HERO_STATS = [
  { value: 3000000, suffix: '+', label: 'Domains Hosted' },
  { value: 99.99, suffix: '%', label: 'Uptime' },
  { value: 24, suffix: '/7', label: 'Expert Support' },
  { value: 30, suffix: '-Day', label: 'Money-Back Guarantee' },
];

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: string;
};

export const FEATURES: Feature[] = [
  {
    icon: Gauge,
    title: 'Blazing Fast Speed',
    description:
      'NGINX servers with HTTP/3, ultra-fast PHP execution, and premium storage deliver consistently fast load times for your websites.',
    accent: 'from-brand-500 to-accent-500',
  },
  {
    icon: ShieldCheck,
    title: 'AI Anti-Bot Security',
    description:
      'Proactive AI-driven protection blocks brute-force attacks, while free Let\u2019s Encrypt SSL and daily backups keep you safe.',
    accent: 'from-accent-500 to-brand-600',
  },
  {
    icon: Headphones,
    title: '24/7 Human Support',
    description:
      'Real hosting experts available around the clock via chat, ticket, and phone \u2014 with fast first-response times.',
    accent: 'from-brand-600 to-accent-600',
  },
  {
    icon: Rocket,
    title: 'Managed WordPress',
    description:
      'One-click WordPress installs, automatic core updates, WP-CLI, staging tools, and server-level caching tuned for WP.',
    accent: 'from-accent-600 to-brand-500',
  },
  {
    icon: Globe,
    title: 'Free Site Migration',
    description:
      'SiteGround\u2019s migration experts move your site for free \u2014 zero downtime, zero stress, usually completed within 24 hours.',
    accent: 'from-brand-500 to-brand-700',
  },
  {
    icon: Server,
    title: 'Free CDN & SSL',
    description:
      'Cloudflare-powered CDN and free SSL certificates on every plan, boosting both performance and security from day one.',
    accent: 'from-accent-500 to-accent-700',
  },
];

export type DeepDive = {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  icon: LucideIcon;
  image: string;
  reverse?: boolean;
};

export const DEEP_DIVES: DeepDive[] = [
  {
    eyebrow: 'Speed Technology',
    title: 'NGINX + HTTP/3 + Ultra-Fast PHP',
    description:
      'SiteGround\u2019s custom server stack is engineered for raw speed. NGINX Direct Delivery serves static assets in milliseconds, while dynamic content runs on an optimized PHP pipeline with up to 30% faster execution than standard setups.',
    bullets: [
      'NGINX Direct Delivery for static assets',
      'HTTP/3 support for faster, more resilient connections',
      'Up to 30% faster PHP execution via custom pipeline',
      'SSD persistent storage on every plan',
    ],
    icon: Zap,
    image:
      'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    eyebrow: 'Security Layer',
    title: 'AI-Powered Anti-Bot Protection',
    description:
      'Every SiteGround account is guarded by an AI-driven firewall that learns and blocks malicious traffic in real time. Combined with free SSL, daily backups, and proactive patching, your site stays secure without lifting a finger.',
    bullets: [
      'AI firewall blocks brute-force & zero-day attacks',
      'Free Let\u2019s Encrypt SSL on all domains',
      'Daily automated backups with on-demand restore',
      'Proactive server-level patching & monitoring',
    ],
    icon: Lock,
    image:
      'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=900',
    reverse: true,
  },
  {
    eyebrow: 'Support Experience',
    title: 'Real Experts, Anytime You Need',
    description:
      'No bots, no runaround. SiteGround\u2019s support team is staffed 24/7 by trained hosting professionals who resolve issues at the server level. Chat, ticket, or phone \u2014 you choose, and they deliver.',
    bullets: [
      'Human experts available 24/7/365',
      'Chat, ticket, and phone support channels',
      'Fast first-response times',
      'Server-level fixes, not just script resets',
    ],
    icon: LifeBuoy,
    image:
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
];

export type Testimonial = {
  quote: string;
  business: string;
  role: string;
};

// Real customer stories sourced from SiteGround's official client stories page.
// Quotes are attributed and linked; no fabricated names, avatars, or ratings.
export const TESTIMONIALS_SOURCE_URL =
  'https://www.siteground.com/client-stories';

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Not only do we spend 75% less on our monthly bill, but our website speed increased when we moved to SiteGround.',
    business: 'builtlean.com',
    role: 'Wellness Coach',
  },
  {
    quote:
      'The reliability, the performance, the support \u2014 everything at SiteGround just works.',
    business: 'inklingdesign.ca',
    role: 'Web Agency',
  },
  {
    quote:
      'It had lots of features we were able to tap into to make our site\u2019s performance 88.6% faster.',
    business: 'japanskiexperience.com',
    role: 'Ski Travel Agency',
  },
  {
    quote:
      'My site got faster on SiteGround, which has really helped with the increase in organic traffic.',
    business: 'alixr.co.uk',
    role: 'Wellness & Longevity Coach',
  },
];

export const TRUST_LOGOS = [
  'Recommended by WordPress.org',
  'Trusted by 3M+ Domains',
  'PCI-Compliant Servers',
];

export type FAQItem = {
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Is there a free trial or money-back guarantee?',
    answer:
      'SiteGround offers a generous 30-day money-back guarantee on all shared hosting plans. If you\u2019re not satisfied for any reason, you can request a full refund within 30 days \u2014 no questions asked. This effectively lets you try the service risk-free.',
  },
  {
    question: 'Will SiteGround migrate my existing website for free?',
    answer:
      'Yes. SiteGround\u2019s migration team will move your site at no extra cost on GrowBig and GoGeek plans. They handle WordPress, Joomla, and custom sites, usually completing the transfer within 24 hours with zero downtime. You can also use the free WordPress Migrator plugin for self-service moves.',
  },
  {
    question: 'How fast is the customer support?',
    answer:
      'SiteGround\u2019s support is available 24/7/365 via live chat, ticket, and phone. Response times are fast, and all agents are trained hosting professionals who can resolve issues at the server level \u2014 not just frontline script-readers.',
  },
  {
    question: 'What makes SiteGround faster than other hosts?',
    answer:
      'SiteGround runs a custom stack: NGINX for static content, HTTP/3 for resilient connections, an optimized PHP pipeline that\u2019s up to 30% faster than standard, SSD persistent storage, and a Cloudflare-powered CDN. Server-level caching is pre-tuned for WordPress so you get great speeds without extra plugins.',
  },
  {
    question: 'Can I upgrade or downgrade my plan later?',
    answer:
      'Absolutely. You can upgrade or downgrade your plan at any time from the Site Tools dashboard. Upgrades take effect immediately, and prorated billing ensures you only pay for what you use. Downgrades can be scheduled for your next billing cycle.',
  },
];

// Original, first-party editorial verdict — unique content written by us.
// Honest take based on SiteGround's official docs and published client stories;
// deliberately avoids fabricated benchmark numbers or invented test results.
export const VERDICT_SUMMARY =
  'SiteGround is a strong pick if you value speed, security, and genuinely helpful support over the cheapest possible price. The Google Cloud stack, free CDN/SSL, and managed WordPress tooling do the heavy lifting for you, and support is staffed by people who fix things at the server level. The trade-off is honest to point out: the low intro price steps up at renewal, so it suits people who plan to stay for the platform, not just the first-year deal.';

export const VERDICT_PROS = [
  'Built on Google Cloud with a custom NGINX + ultra-fast PHP stack',
  'Free CDN, SSL, and daily backups on every plan',
  'Managed WordPress: auto-updates, staging, and WP-CLI',
  '24/7 support from trained humans, not just script-readers',
  'Free, expert-handled site migration',
];

export const VERDICT_CONS = [
  'Renewal prices are higher than the promotional intro rate',
  'Storage suits typical sites, less so huge media libraries',
  'Monthly billing costs more than prepaying for a year',
  'Advanced features like staging & Git begin on higher tiers',
];

export const VERDICT_METHOD =
  'How we formed this review: we base it on SiteGround\u2019s official product documentation, its published client stories, and hands-on familiarity with managed WordPress hosting. We update this page as SiteGround\u2019s plans and features change, and we flag trade-offs as clearly as strengths.';

export const FOOTER_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Performance', href: '#performance' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Verdict', href: '#verdict' },
  { label: 'FAQ', href: '#faq' },
];

export const FOOTER_RESOURCES = [
  { label: 'Web Hosting', href: AFFILIATE_URL },
  { label: 'WordPress Hosting', href: AFFILIATE_URL },
  { label: 'WooCommerce Hosting', href: AFFILIATE_URL },
  { label: 'Site Migration', href: AFFILIATE_URL },
];

export const FOOTER_COMPANY = [
  { label: 'About SiteGround', href: AFFILIATE_URL },
  { label: 'Data Centers', href: AFFILIATE_URL },
  { label: 'Affiliate Program', href: AFFILIATE_URL },
  { label: 'Contact Support', href: AFFILIATE_URL },
];

export { Database, Code2, RefreshCw };
