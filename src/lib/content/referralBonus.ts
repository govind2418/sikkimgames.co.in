import type { FaqItem } from '@/lib/schema';

export const referralBonusFaqs: FaqItem[] = [
  {
    question: 'How does the Sikkim Game referral program work?',
    answer:
      'You share your personal referral or invite code/link with someone. When they register using it and meet the campaign\'s activity requirements, you may receive a commission or bonus — exact terms are set and can change on the official platform.',
  },
  {
    question: 'Where do I find my own referral code?',
    answer:
      'It is usually shown inside your account under a "Refer & Earn", "Invite Friends", or "Team" section once you are logged in. Check the current app layout, since section names shift between versions.',
  },
  {
    question: 'Is referral income guaranteed?',
    answer:
      'No. Payouts depend on the referred person actually registering and being active under whatever rules the platform has in place at the time — nothing here is a guaranteed income promise.',
  },
  {
    question: 'Do I have to pay anything to become a referrer?',
    answer:
      'No. Sharing your own referral code should never cost you money. Be suspicious of anyone charging a fee to "activate" referral earnings.',
  },
  {
    question: 'Can I refer myself using a second account?',
    answer:
      'Self-referral and duplicate-account referrals are against most platforms\' terms and can lead to forfeited bonuses or account restrictions — always check the official terms before attempting this.',
  },
];

export const referralBonusPoints = [
  {
    title: 'Share your code',
    body: 'Send your personal invite/referral code or link to someone genuinely interested — spamming random contacts rarely converts and can violate platform rules.',
  },
  {
    title: 'They register with it',
    body: 'The new player enters your code at sign-up (see our Invite Code guide) so the referral is correctly attributed to your account.',
  },
  {
    title: 'Track it in your account',
    body: 'Check your Refer & Earn or Team section in the app to see pending and confirmed referral activity.',
  },
];
