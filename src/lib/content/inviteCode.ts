import type { FaqItem } from '@/lib/schema';

export const inviteCodeFaqs: FaqItem[] = [
  {
    question: 'What does a Sikkim Game invite code actually do?',
    answer:
      'It is a short alphanumeric code shared by an existing player or a promotional page. Entering it during sign-up links your new account to that referral, and on some campaigns it unlocks a welcome bonus.',
  },
  {
    question: 'Where do I type in an invite code?',
    answer:
      'Look for a field labelled "Invite Code" or "Referral Code" on the registration screen. A few app versions let you add it later from account settings — check the current layout inside the official app.',
  },
  {
    question: 'Is an invite code mandatory to sign up?',
    answer:
      'No, registering without one is fine in most cases. It is an optional way to attach a referral to your new account for a possible extra benefit.',
  },
  {
    question: 'I already registered — can I still add a code?',
    answer:
      'That depends on the platform version. Some allow adding a referral code shortly after signup, others only accept it at the moment of registration. If you don\'t see the option later, it likely had to be entered at signup.',
  },
  {
    question: 'Where do genuine invite codes come from?',
    answer:
      'Usually from existing players or official promotional channels. Treat any code bundled with a request for payment or personal details as a red flag — a real invite code never charges you to use it.',
  },
];

export const inviteCodeSteps = [
  {
    title: 'Get a code from a trusted source',
    body: 'A friend who already plays, or an official promotional page, are the two reliable sources for a genuine invite code.',
  },
  {
    title: 'Open the registration screen',
    body: 'Start the sign-up flow through our Download and Register pages so you land on the official form.',
  },
  {
    title: 'Paste the code exactly',
    body: 'Enter it in the Invite Code / Referral Code field precisely as shared, with no extra spaces or characters.',
  },
  {
    title: 'Finish registration',
    body: 'Complete the rest of the sign-up steps and check the rewards or bonus tab afterward to see if anything was credited.',
  },
];
