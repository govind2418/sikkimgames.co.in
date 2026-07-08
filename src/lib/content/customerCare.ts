import type { FaqItem } from '@/lib/schema';

export const customerCareFaqs: FaqItem[] = [
  {
    question: 'How do I reach Sikkim Game customer care?',
    answer:
      'Use the official in-app support or help-desk section — most platforms in this category offer live chat or a support ticket form rather than a public phone line. Check the app\'s "Help" or "Support" menu for the current contact method.',
  },
  {
    question: 'Does sikkimgames.co.in provide account support?',
    answer:
      'No — we are an independent guide and cannot access, view, or resolve any account, deposit or withdrawal issue. Those requests must go through official in-app support.',
  },
  {
    question: 'Is there an official customer care phone number?',
    answer:
      'Be cautious of numbers circulating on social media or forwarded messages claiming to be official support — verify any contact detail against what is shown inside the official app itself before trusting it.',
  },
  {
    question: 'What information should I have ready when contacting support?',
    answer:
      'Your registered mobile number, a clear description of the issue, and — for a transaction problem — the approximate time and amount involved, without ever sharing your password or OTP.',
  },
  {
    question: 'How long does support usually take to respond?',
    answer:
      'Response times vary by platform and ticket volume. If in-app chat is available, it is typically the fastest route for time-sensitive issues.',
  },
];

export const customerCarePoints = [
  {
    title: 'Use in-app support first',
    body: 'The Help or Support section inside the official app is the correct, verified channel for account, deposit and withdrawal issues.',
  },
  {
    title: 'Verify before you trust',
    body: 'Cross-check any phone number, email, or "support" social media page against what is listed inside the official app before sharing any details.',
  },
  {
    title: 'Never share credentials',
    body: 'No genuine support agent will ever ask for your password, OTP, or full card number over chat — treat that request as a scam.',
  },
];
