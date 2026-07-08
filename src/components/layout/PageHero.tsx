import { CtaButton } from '@/components/ui/Button';
import { DownloadIcon, UserPlusIcon } from '@/components/icons';
import { SITE } from '@/lib/site';

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <div className="border-b border-night-900/10 bg-gradient-to-b from-brand-50 to-paper-50 dark:border-white/10 dark:from-night-900 dark:to-night-950">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 md:py-14">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-300">
          {eyebrow}
        </p>
        <h1 className="max-w-3xl font-display text-3xl font-extrabold leading-tight text-night-900 sm:text-4xl dark:text-white">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-night-700/80 dark:text-paper-200/80">{intro}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <CtaButton href={SITE.registerUrl} variant="primary" size="md">
            <UserPlusIcon className="h-4 w-4" /> Register Now
          </CtaButton>
          <CtaButton href="/download" external={false} variant="secondary" size="md" showArrow={false}>
            <DownloadIcon className="h-4 w-4" /> Download APK
          </CtaButton>
        </div>
      </div>
    </div>
  );
}
