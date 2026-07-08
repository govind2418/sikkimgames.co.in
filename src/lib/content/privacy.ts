import type { FaqItem } from '@/lib/schema';

export const privacyFaqs: FaqItem[] = [
  {
    question: 'Does sikkimgames.co.in collect my personal information?',
    answer:
      'We do not operate user accounts, so we never collect registration details, passwords, or payment data. Privacy-conscious analytics may be used to understand aggregate traffic to our pages.',
  },
  {
    question: 'Does this site use cookies?',
    answer:
      'A minimal set of cookies may support basic site function and anonymised analytics. We never use cookies to process payments or store gaming credentials — we simply do not run any accounts.',
  },
  {
    question: "Where do I find the official operator's privacy policy?",
    answer:
      "For how the official Sikkim Game operator handles your account data, refer to the policy published inside their own app or website — not this page.",
  },
];

export const privacySections = [
  {
    title: '1. What this policy covers',
    body: 'This Privacy Policy explains how sikkimgames.co.in ("we", "this site") handles visitor information. It does not extend to the official Sikkim Game operator\'s app or website, which publishes its own separate policy.',
  },
  {
    title: '2. Information we collect',
    body: 'No account is required to browse this site. We may collect standard, non-identifying technical data — browser type, approximate region, pages viewed — through privacy-conscious analytics to understand how content is used.',
  },
  {
    title: '3. Cookies',
    body: 'Basic cookies may store simple preferences or measure aggregate traffic. You can disable cookies in your browser at any time; the core content will remain accessible.',
  },
  {
    title: '4. Links to the official platform',
    body: "This site links out to the official Sikkim Game operator's platform. Once you leave sikkimgames.co.in, that platform's own privacy policy and data practices take over — please review them independently.",
  },
  {
    title: '5. What we never ask for',
    body: 'We never request your account password, OTP, card number, or banking credentials. If anyone claiming to represent this site asks for those, it is not a legitimate request — do not respond.',
  },
  {
    title: '6. Updates to this policy',
    body: 'This Privacy Policy may be revised periodically to reflect changes in our content or applicable regulations. The current version is always the one published on this page.',
  },
  {
    title: '7. Contact',
    body: 'Questions about this policy can be sent through our Contact page.',
  },
];
