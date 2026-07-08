import Image from 'next/image';
import Link from 'next/link';
import { NAV_LINKS, SITE } from '@/lib/site';
import { CtaButton } from '@/components/ui/Button';
import { ThemeToggle } from '@/components/layout/ThemeToggle';
import logo from '../../../public/images/brand/logo.png';

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-night-900/10 bg-paper-50/90 backdrop-blur-sm dark:border-white/10 dark:bg-night-950/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2" aria-label={`${SITE.name} home`}>
          <Image src={logo} alt="Sikkim Game logo" height={28} priority className="h-7 w-auto" />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-night-700 transition-colors hover:text-brand-600 dark:text-paper-200 dark:hover:text-brand-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <CtaButton href={SITE.registerUrl} variant="ghost" size="md" showArrow={false} className="hidden sm:inline-flex">
            Login
          </CtaButton>
          <CtaButton href={SITE.registerUrl} variant="primary" size="md" showArrow={false}>
            Register
          </CtaButton>
        </div>
      </div>
    </header>
  );
}
