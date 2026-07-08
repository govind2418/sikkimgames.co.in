import { CtaButton } from '@/components/ui/Button';
import { PhoneMockup } from './PhoneMockup';
import { ShieldIcon, ZapIcon, StarIcon } from '@/components/icons';
import { SITE } from '@/lib/site';

export function Hero() {
  return (
    <div className="relative overflow-hidden border-b border-night-900/10 bg-gradient-to-b from-brand-50 via-paper-50 to-paper-50 dark:border-white/10 dark:from-night-900 dark:via-night-950 dark:to-night-950">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-2 lg:items-center lg:gap-8">
        <div className="animate-fadeIn">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold text-brand-700 dark:text-brand-300">
            Independent Sikkim Game Players Guide
          </p>
          <h1 className="font-display text-4xl font-extrabold leading-tight text-night-900 sm:text-5xl dark:text-white">
            Sikkim Game Login, Register &amp; Prediction Guide
          </h1>
          <p className="mt-5 max-w-xl text-lg text-night-700/80 dark:text-paper-200/80">
            One clear hub for Sikkim Game: fast login and registration steps, the safest way to
            get the APK, how invite &amp; gift codes work, and plain-language breakdowns of Wingo
            and Colour Prediction rounds before you head to the official platform.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaButton href={SITE.registerUrl} size="lg">Register Now</CtaButton>
            <CtaButton href="/download" external={false} variant="secondary" size="lg">
              Download APK
            </CtaButton>
          </div>
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-night-700/70 dark:text-paper-300/70">
            <span className="flex items-center gap-2">
              <ZapIcon className="h-4 w-4 text-brand-600 dark:text-brand-400" /> Fast, lightweight guides
            </span>
            <span className="flex items-center gap-2">
              <ShieldIcon className="h-4 w-4 text-brand-600 dark:text-brand-400" /> Independent &amp; transparent
            </span>
            <span className="flex items-center gap-2">
              <StarIcon className="h-4 w-4 text-brand-600 dark:text-brand-400" /> Updated regularly
            </span>
          </div>
        </div>
        <div className="animate-fadeIn">
          <PhoneMockup />
        </div>
      </div>
    </div>
  );
}
