import { CtaButton } from '@/components/ui/Button';
import { SITE } from '@/lib/site';

export function CtaBand({
  title = 'Ready to get started with Sikkim Game?',
  subtitle = 'Register on the official platform or grab the APK in under a minute.',
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="rounded-3xl border border-brand-500/30 bg-gradient-to-br from-brand-600 via-brand-700 to-night-900 p-8 text-center shadow-glow sm:p-12">
        <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">{title}</h2>
        <p className="mx-auto mt-3 max-w-xl text-brand-50/90">{subtitle}</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <CtaButton href={SITE.registerUrl} variant="gold" size="lg">Register Now</CtaButton>
          <CtaButton href="/download" external={false} variant="secondary" size="lg">
            Download APK
          </CtaButton>
        </div>
      </div>
    </div>
  );
}
