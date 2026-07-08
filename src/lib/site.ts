export const SITE = {
  name: 'Sikkim Game',
  domain: 'sikkimgames.co.in',
  url: 'https://sikkimgames.co.in',
  legalName: 'Sikkim Game Players Guide',
  description:
    'Independent player guide for Sikkim Game — login help, registration walkthrough, APK download, invite & gift codes, and Wingo & Colour Prediction strategy explainers.',
  officialUrl: 'https://sikkimgg.live/#/',
  registerUrl: 'https://sikkimgg.live/#/register?invitationCode=448445788742',
  contactEmail: 'support@sikkimgames.co.in',
  twitterHandle: '@sikkimgamesco',
  themeColor: '#059669',
  locale: 'en_IN',
} as const;

export type NavLink = {
  label: string;
  href: string;
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Download', href: '/download' },
  { label: 'Wingo Prediction', href: '/sikkim-wingo-prediction' },
  { label: 'Colour Prediction', href: '/sikkim-colour-prediction-tricks' },
  { label: 'Invite Code', href: '/sikkim-game-invite-code' },
  { label: 'Gift Code', href: '/sikkim-game-gift-code' },
  { label: 'About', href: '/about' },
];

export const ACCOUNT_LINKS: NavLink[] = [
  { label: 'Login Guide', href: '/login' },
  { label: 'Register Guide', href: '/register' },
  { label: 'Download APK', href: '/download' },
  { label: 'Invite Code', href: '/sikkim-game-invite-code' },
  { label: 'Gift Code', href: '/sikkim-game-gift-code' },
];

export const GUIDE_LINKS: NavLink[] = [
  { label: 'Wingo Prediction', href: '/sikkim-wingo-prediction' },
  { label: 'Colour Prediction Tricks', href: '/sikkim-colour-prediction-tricks' },
  { label: 'Referral Bonus', href: '/sikkim-game-referral-bonus' },
  { label: 'Deposit & Withdrawal', href: '/sikkim-game-deposit-withdrawal' },
  { label: 'Daily Bonus', href: '/sikkim-game-daily-bonus' },
  { label: 'VIP Levels', href: '/sikkim-game-vip-levels' },
];

export const COMPANY_LINKS: NavLink[] = [
  { label: 'About Us', href: '/about' },
  { label: 'Is It Real or Fake?', href: '/sikkim-game-real-or-fake' },
  { label: 'Customer Care', href: '/sikkim-game-customer-care' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms' },
];

export const FOOTER_LINKS: NavLink[] = [
  ...ACCOUNT_LINKS,
  ...GUIDE_LINKS,
  ...COMPANY_LINKS,
];

export const DISCLAIMER =
  'Sikkim Game (sikkimgames.co.in) is an independent, unofficial player guide and affiliate resource. We are not the gaming operator and are not affiliated with, endorsed by, or acting on behalf of the Government of Sikkim or any state authority. All game access, accounts, deposits and withdrawals happen on the official operator platform, not on this site. This site does not accept payments, does not run any game, and does not guarantee winnings — content described as "tricks" or "strategy" is general pattern-reading commentary, not a guaranteed outcome. Real-money gaming may be restricted or regulated in your state — you are solely responsible for verifying local legality before participating. Must be 18+. Please play responsibly.';
