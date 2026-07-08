import type { FaqItem } from '@/lib/schema';

export const loginFaqs: FaqItem[] = [
  {
    question: 'What is the correct way to log in to Sikkim Game?',
    answer:
      'Open the official app or website, enter the registered mobile number and password, then tap Login. If you installed the APK, confirm you are on the latest build — outdated versions are a common cause of login trouble.',
  },
  {
    question: "I can't remember my password — what now?",
    answer:
      'Use "Forgot Password" on the login screen to reset it through your registered mobile number. If that number is no longer active, you will need to reach official in-app support directly.',
  },
  {
    question: 'Why does the app keep rejecting my login?',
    answer:
      'The usual culprits are an old app version, a mistyped password, patchy internet, or the wrong country code on the phone number field. Rule each one out before trying again.',
  },
  {
    question: 'Can I sign in through a browser instead of the app?',
    answer:
      'A web login is often available alongside the app. Our Download page keeps the current official links for both routes.',
  },
  {
    question: 'Is it okay to stay logged in on my phone?',
    answer:
      'Only on a personal device protected by a screen lock. Never hand over your password, OTP, or a "login link" to anyone offering bonuses in exchange — that is a scam pattern, not a real support process.',
  },
];

export const loginSteps = [
  {
    title: 'Launch the right app or page',
    body: 'Open the Sikkim Game app you installed, or reach the official login page through the link on our Download page — steer clear of links sent in random chats.',
  },
  {
    title: 'Type your registered mobile number',
    body: 'Use the exact number tied to your account, country code included if the field asks for it.',
  },
  {
    title: 'Enter your password carefully',
    body: "If you're not confident you remember it correctly, use Forgot Password rather than guessing repeatedly — repeated failed attempts can lock some accounts.",
  },
  {
    title: 'Confirm and continue',
    body: 'Complete any OTP step if prompted. You should then land on your account dashboard, ready to check your balance or open a game mode.',
  },
];
