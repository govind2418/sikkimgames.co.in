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
  icons: {
    icon: '/images/brand/app-icon-192.png',
    apple: '/images/brand/app-icon-192.png',
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    'Sikkim Game',
    'Sikkim Game Login',
    'Sikkim Game Register',
    'Sikkim Game Download',
    'Sikkim Game APK',
    'Sikkim Game Invite Code',
    'Sikkim Game Gift Code',
    'Sikkim Wingo Prediction',
    'Sikkim Colour Prediction',
    'Sikkim Game Referral Bonus',
    'Sikkim Game Customer Care',
    'Sikkim Game Real or Fake',
  ],
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
