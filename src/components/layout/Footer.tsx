import Image from 'next/image';
import Link from 'next/link';
import { ACCOUNT_LINKS, GUIDE_LINKS, COMPANY_LINKS, SITE, DISCLAIMER } from '@/lib/site';
import logo from '../../../public/images/brand/logo.png';

function FooterColumn({ heading, links }: { heading: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="mb-3 text-sm font-semibold text-night-900 dark:text-white">{heading}</p>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm text-night-700/80 hover:text-brand-600 dark:text-paper-300/80 dark:hover:text-brand-300">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-night-900/10 bg-paper-100 pb-24 pt-12 dark:border-white/10 dark:bg-night-900 lg:pb-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div className="col-span-2">
            <Image src={logo} alt="Sikkim Game logo" height={26} className="h-6 w-auto" />
            <p className="mt-3 max-w-sm text-sm text-night-700/80 dark:text-paper-300/80">{SITE.description}</p>
          </div>
          <FooterColumn heading="Account" links={ACCOUNT_LINKS} />
          <FooterColumn heading="Guides" links={GUIDE_LINKS} />
          <FooterColumn heading="Company" links={COMPANY_LINKS} />
        </div>

        <div className="mt-10 rounded-2xl border border-night-900/10 bg-white p-4 text-xs leading-relaxed text-night-700/80 dark:border-white/10 dark:bg-white/5 dark:text-paper-300/80">
          <strong className="text-night-900 dark:text-paper-100">Disclaimer:</strong> {DISCLAIMER}
        </div>

        <p className="mt-6 text-center text-xs text-night-700/60 dark:text-paper-300/60">
          &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
