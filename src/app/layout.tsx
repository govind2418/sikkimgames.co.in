import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { StickyCTA } from '@/components/layout/StickyCTA';
import { JsonLd, organizationSchema } from '@/lib/schema';
import { SITE } from '@/lib/site';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
  weight: ['600', '700', '800'],
  preload: true,
});

const NO_FLASH_THEME_SCRIPT = `
(function () {
  try {
    var stored = localStorage.getItem('sg-theme');
    var dark = stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (dark) document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Login, Register, APK Download & Prediction Guides`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  manifest: '/site.webmanifest',
  icons: {
    icon: '/images/brand/app-icon-192.png',
    apple: '/images/brand/app-icon-192.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  verification: {
    google: 'MGAYNo9Kv99KiL2lhHu3EFiKhg08Ogg-FEca304Q2OM',
  },
  keywords: [
    'Sikkim Game',
    'Sikkim Games',
    'Sikkim Game Login',
    'Sikkim Login',
    'Sikkim Game Register',
    'Sikkim Register',
    'Sikkim Game Download',
    'Sikkim Game APK',
    'Sikkim Game App',
    'Sikkim Game Invite Code',
    'Sikkim Game Referral Code',
    'Sikkim Game Gift Code',
    'Sikkim Game Redeem Code',
    'Sikkim Wingo Prediction',
    'Sikkim Wingo',
    'Sikkim Colour Prediction',
    'Sikkim Colour Prediction Tricks',
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
  ],
  openGraph: {
    title: `${SITE.name} — Login, Register, APK Download & Prediction Guides`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: SITE.locale,
    type: 'website',
    images: [{ url: `${SITE.url}/og?title=${encodeURIComponent(SITE.name)}`, width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: 'summary_large_image',
    site: SITE.twitterHandle,
    creator: SITE.twitterHandle,
    title: `${SITE.name} — Login, Register, APK Download & Prediction Guides`,
    description: SITE.description,
    images: [`${SITE.url}/og?title=${encodeURIComponent(SITE.name)}`],
  },
};

export const viewport = {
  themeColor: SITE.themeColor,
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: NO_FLASH_THEME_SCRIPT }} />
      </head>
      <body className="flex min-h-screen flex-col bg-paper-50 font-sans text-night-900 antialiased dark:bg-night-950 dark:text-paper-100">
        <JsonLd data={organizationSchema()} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
