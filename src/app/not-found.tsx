import { CtaButton } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-300">404 Error</p>
      <h1 className="mt-3 font-display text-3xl font-bold text-night-900 sm:text-4xl dark:text-white">Page Not Found</h1>
      <p className="mt-4 text-night-700/80 dark:text-paper-200/80">
        The page you&apos;re looking for has moved or doesn&apos;t exist. Head back home to browse
        Sikkim Game login, registration, download and prediction guides.
      </p>
      <CtaButton href="/" external={false} variant="primary" className="mt-8">
        Back to Home
      </CtaButton>
    </div>
  );
}
