import type { FaqItem } from '@/lib/schema';

export const realOrFakeFaqs: FaqItem[] = [
  {
    question: 'Is Sikkim Game "real" or a scam?',
    answer:
      'We cannot make that determination for you, and we are not the operator or a regulator. What we can do is show you how to evaluate any prediction/gaming platform yourself — see the checklist on this page — and remind you that no independent site can guarantee another company\'s legitimacy.',
  },
  {
    question: 'Why do some people call this kind of game a scam?',
    answer:
      'The wider colour-prediction/number-guessing category has a documented history of third-party scam layers — fake "prediction agents", paid signal groups, and fee-charging invite schemes — that operate around legitimate platforms and prey on new players. Those scams are usually run by outside actors, not necessarily the platform itself, but the confusion is real and worth taking seriously.',
  },
  {
    question: 'What is the single biggest red flag to watch for?',
    answer:
      'Anyone asking you to pay a fee, share your OTP, or send your password in order to "unlock", "activate" or "guarantee" winnings. That pattern is never part of a legitimate account or bonus process.',
  },
  {
    question: 'How do I check if I am on the real, official platform?',
    answer:
      'Always start from a link you sourced yourself — for example our Download page — rather than a link forwarded in a message. Compare app details, publisher name, and version history where visible before entering any personal information.',
  },
  {
    question: 'Should I trust this site\'s opinion on whether it is safe?',
    answer:
      "We are an independent guide, not an auditor or regulator, and we have a disclosed affiliate relationship with the official platform's referral program. Weigh our content as one input, alongside your own research and local regulations — not as a guarantee.",
  },
];

export const realOrFakeChecklist = [
  {
    title: 'Verify the source of your link',
    body: 'Only install or register through a link you found yourself — our Download page, or a source you independently trust — never a link forwarded by a stranger promising bonuses.',
  },
  {
    title: 'No legitimate step ever needs your OTP',
    body: 'Registration, login, deposits and withdrawals never require you to read an OTP aloud or forward it to a "support agent" or "referral manager".',
  },
  {
    title: 'Be skeptical of guaranteed-win claims',
    body: 'Prediction and colour-guessing formats are chance-based. Any paid "formula", "VIP group", or "prediction software" promising certain wins is a red flag, not a genuine edge.',
  },
  {
    title: 'Check your state\'s current regulations',
    body: 'Real-money gaming rules differ across Indian states and change over time — confirming local legality is your responsibility before you participate.',
  },
];
