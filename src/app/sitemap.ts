import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';

const routes = [
  '',
  '/login',
  '/register',
  '/download',
  '/sikkim-game-invite-code',
  '/sikkim-game-gift-code',
  '/sikkim-wingo-prediction',
  '/sikkim-colour-prediction-tricks',
  '/sikkim-game-referral-bonus',
  '/sikkim-game-customer-care',
  '/sikkim-game-deposit-withdrawal',
  '/sikkim-game-real-or-fake',
  '/sikkim-game-daily-bonus',
  '/sikkim-game-vip-levels',
  '/about',
  '/contact',
  '/privacy-policy',
  '/terms',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified,
    changeFrequency: path === '' ? 'daily' : 'weekly',
    priority: path === '' ? 1 : 0.7,
  }));
}
