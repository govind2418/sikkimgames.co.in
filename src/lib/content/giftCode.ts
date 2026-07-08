import type { FaqItem } from '@/lib/schema';

export const giftCodeFaqs: FaqItem[] = [
  {
    question: 'What is a Sikkim Game gift code?',
    answer:
      'A short redeem code that unlocks a specific reward — bonus credit, most commonly — once entered in the app\'s rewards or redemption section.',
  },
  {
    question: 'Where exactly do I redeem it?',
    answer:
      'Log in to the official app, open the Rewards / Promotions / Redeem Code section (the name shifts slightly between versions), enter the code, and confirm.',
  },
  {
    question: "My code isn't working — why?",
    answer:
      'Gift codes typically expire after a set window or a limited number of redemptions. Check for typos, stray spaces, or wrong capitalisation, and confirm the code hasn\'t already been used or expired.',
  },
  {
    question: 'Do I have to pay to use a gift code?',
    answer:
      'No — legitimate gift codes are free. If someone asks for payment, your password, or an OTP to "unlock" a code, that is a scam and you should not proceed.',
  },
  {
    question: 'Where are new gift codes usually posted?',
    answer:
      'Official promotional channels and in-app notifications are the most reliable places. Be wary of codes from unverified pages, especially any that ask for account details to "verify" the code first.',
  },
];

export const giftCodeSteps = [
  'Open the official Sikkim Game app and log in to your account.',
  'Navigate to the Rewards, Promotions, or Redeem Code section.',
  'Enter the gift code exactly as shared, matching capitalisation with no extra spaces.',
  'Confirm the redemption and check your balance or rewards tab for the credit.',
];
