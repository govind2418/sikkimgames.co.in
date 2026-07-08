import type { FaqItem } from '@/lib/schema';

export const wingoPredictionFaqs: FaqItem[] = [
  {
    question: 'What is Wingo on Sikkim Game?',
    answer:
      'Wingo is a fast, fixed-timer number and colour round. Before the timer ends, players pick a number, its associated colour, or a size category (big/small); a result is revealed the moment the round closes.',
  },
  {
    question: 'How long does one round run for?',
    answer:
      'Round length is set by the official platform and can vary — short one-to-a-few-minute cycles are common, so a new round starts almost immediately after the last one closes.',
  },
  {
    question: 'What can players actually bet on?',
    answer:
      'Typically a specific number, the colour tied to that round\'s number set, or a size category. Each option carries different odds and payout multipliers, shown in the app before you confirm a bet.',
  },
  {
    question: 'Do "Wingo prediction" tools genuinely work?',
    answer:
      'Results come from the platform\'s own system, so no external tool, bot, or paid "formula" can reliably predict them. Treat any prediction service promising guaranteed wins with heavy skepticism.',
  },
  {
    question: 'How is Wingo different from Colour Prediction?',
    answer:
      'They are closely related formats. Wingo centers on numbers with attached colours and size options, while Colour Prediction is a simpler pick-a-colour round. Exact rules vary by platform version.',
  },
];

export const wingoPredictionPoints = [
  {
    title: 'Number, colour & size bets',
    body: 'Each bet type carries its own odds and multiplier — always check the current payout table in-app before confirming a bet.',
  },
  {
    title: 'Rapid round cycles',
    body: 'New rounds begin right after the previous one closes, so results arrive in quick succession — set a time and spend limit before you start.',
  },
];
