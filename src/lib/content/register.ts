import type { FaqItem } from '@/lib/schema';

export const registerFaqs: FaqItem[] = [
  {
    question: 'What is the fastest way to register on Sikkim Game?',
    answer:
      'Open the official app or site, tap Register, enter your mobile number, set a password, confirm the OTP sent by SMS, and your account is live — the whole flow usually takes under a minute.',
  },
  {
    question: 'Is an invite code required to sign up?',
    answer:
      "Not usually — it's optional, but entering one can unlock a welcome bonus on some campaigns. Our Invite Code guide covers exactly where to enter it.",
  },
  {
    question: 'What information do I actually need to provide?',
    answer:
      'Just a working mobile number, a password you choose, and OTP confirmation. No legitimate registration step ever asks for banking passwords or card PINs.',
  },
  {
    question: 'Can I open a second account with the same number?',
    answer:
      'No — each mobile number is generally tied to a single account. If you already have one, use the Login page instead of trying to register again.',
  },
  {
    question: 'Does creating an account cost anything?',
    answer:
      'No, registration itself is free. Adding funds is entirely optional and happens only if and when you choose to do it.',
  },
];

export const registerSteps = [
  {
    title: 'Reach the official platform',
    body: 'Use our Download page to find the correct APK or web link, then open the sign-up screen from there.',
  },
  {
    title: 'Provide your mobile number',
    body: 'Use a number you can actually access — it handles OTP verification now and password recovery later.',
  },
  {
    title: 'Set a strong, unique password',
    body: "Combine letters, numbers and symbols, and avoid reusing a password from your email or banking apps.",
  },
  {
    title: 'Confirm the OTP',
    body: 'Enter the SMS code exactly as received. Never forward this code to anyone, even someone claiming to be "support".',
  },
  {
    title: 'Add an invite code if you have one',
    body: 'Optional, but worth entering if you have a valid code — see our Invite Code guide for the full details.',
  },
];
