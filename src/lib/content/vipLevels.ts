import type { FaqItem } from '@/lib/schema';

export const vipLevelsFaqs: FaqItem[] = [
  {
    question: 'How does the Sikkim Game VIP level system work?',
    answer:
      'Many platforms in this category use a tiered VIP structure where cumulative play or deposit activity raises your level, unlocking perks such as faster withdrawals or bonus multipliers. Exact tiers and requirements are defined and can be changed by the official platform.',
  },
  {
    question: 'Where can I check my current VIP level?',
    answer:
      'Look inside your account profile or a dedicated "VIP" tab after logging in — the app usually shows your current tier and progress toward the next one.',
  },
  {
    question: 'Do I have to pay to reach a higher VIP tier?',
    answer:
      'VIP progress is typically tied to normal play/deposit activity rather than a direct one-time purchase, but exact mechanics vary by platform — check the current VIP terms in the app rather than assuming.',
  },
  {
    question: 'Are VIP perks guaranteed to be worth it?',
    answer:
      'Perks depend entirely on platform rules in effect at the time and are not a reason on their own to deposit more than you already planned. Evaluate any tier benefit on its actual terms, not marketing language.',
  },
  {
    question: 'Can my VIP level drop?',
    answer:
      'Some platforms use a rolling activity window that can lower your tier after a period of inactivity, similar to loyalty programs elsewhere — check the specific rules shown in your VIP tab.',
  },
];

export const vipLevelsPoints = [
  {
    title: 'Levels are activity-based',
    body: 'Tiers generally track cumulative play or deposit activity over time, not a single purchase — check your VIP tab for how progress is currently calculated.',
  },
  {
    title: 'Perks vary by tier',
    body: 'Higher tiers may offer perks like faster withdrawal processing or bonus multipliers — read the specific terms for your level rather than assuming they match other platforms.',
  },
  {
    title: "Don't chase a tier past your budget",
    body: 'A VIP perk is never worth depositing more than your planned budget to reach — treat tier benefits as a bonus, not a goal.',
  },
];
