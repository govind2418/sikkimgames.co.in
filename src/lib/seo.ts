import type { Metadata } from 'next';
import { SITE } from './site';

type BuildMetadataArgs = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogTitle?: string;
};

const BASE_KEYWORDS = [
  'Sikkim Game',
  'Sikkim Games',
  'Sikkim Game Login',
  'Sikkim Login',
  'Sikkim Game Register',
  'Sikkim Register',
  'Sikkim Game Sign Up',
  'Sikkim Game Download',
  'Sikkim Game APK',
  'Sikkim Game App',
  'Sikkim Wingo Prediction',
  'Sikkim Wingo',
  'Sikkim Colour Prediction',
  'Sikkim Colour Prediction Tricks',
  'Sikkim Game Invite Code',
  'Sikkim Game Referral Code',
  'Sikkim Game Gift Code',
  'Sikkim Game Redeem Code',
  'Sikkim Game Referral Bonus',
  'Sikkim Game Refer and Earn',
  'Sikkim Game Customer Care',
  'Sikkim Game Support',
  'Sikkim Game Deposit',
  'Sikkim Game Withdrawal',
  'Sikkim Game Real or Fake',
  'Is Sikkim Game Legit',
  'Sikkim Game Daily Bonus',
  'Sikkim Game VIP Levels',
];

export function buildMetadata({ title, description, path, keywords, ogTitle }: BuildMetadataArgs): Metadata {
  const url = `${SITE.url}${path}`;
  const fullTitle = path === '/' ? title : `${title} | ${SITE.name}`;
  const ogImageUrl = `${SITE.url}/og?title=${encodeURIComponent(ogTitle ?? title)}`;
  const allKeywords = Array.from(new Set([...(keywords ?? []), ...BASE_KEYWORDS]));

  return {
    title: { absolute: fullTitle },
    description,
    keywords: allKeywords.join(', '),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE.name,
      locale: SITE.locale,
      type: 'website',
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: 'summary_large_image',
      site: SITE.twitterHandle,
      creator: SITE.twitterHandle,
      title: fullTitle,
      description,
      images: [ogImageUrl],
    },
  };
}
