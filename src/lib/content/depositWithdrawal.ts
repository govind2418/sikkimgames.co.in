import type { FaqItem } from '@/lib/schema';

export const depositWithdrawalFaqs: FaqItem[] = [
  {
    question: 'What is the minimum deposit on Sikkim Game?',
    answer:
      'Minimum deposit and withdrawal amounts are set by the official platform and can change over time — always check the current figures shown inside the app rather than relying on a fixed number from any outside guide.',
  },
  {
    question: 'How long do withdrawals normally take?',
    answer:
      'Processing times depend on the payment method and the platform\'s current policy, and can range from a few minutes to a longer review window, especially for a first withdrawal.',
  },
  {
    question: 'Why was my withdrawal delayed or declined?',
    answer:
      'Common causes include unfinished KYC/verification steps, a mismatch between the deposit and withdrawal account details, or the amount falling outside the platform\'s current limits — check the app\'s wallet or support section for the specific reason.',
  },
  {
    question: 'Are there fees on deposits or withdrawals?',
    answer:
      "Fee structures vary by platform and payment method and are subject to change. Review the fee details shown before you confirm any transaction.",
  },
  {
    question: 'Is it safe to add my bank details in the app?',
    answer:
      'Only enter payment details inside the official, verified app or website — never through a link sent by SMS, WhatsApp, or a third party claiming to speed up your withdrawal.',
  },
];

export const depositWithdrawalPoints = [
  {
    title: 'Depositing funds',
    body: 'Go to the Wallet or Deposit section in the official app, choose a supported payment method, and follow the on-screen steps — double-check the amount before confirming.',
  },
  {
    title: 'Requesting a withdrawal',
    body: 'Open the Withdraw section, confirm your linked payout details match your own account, and submit the request within the platform\'s stated limits.',
  },
  {
    title: 'Keeping it safe',
    body: 'Only transact inside the official app. Screenshots of "faster withdrawal" links shared outside the app are a common scam pattern.',
  },
];
