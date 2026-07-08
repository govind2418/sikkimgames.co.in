export function Section({
  children,
  className = '',
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`animate-fadeIn py-12 md:py-16 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  as: As = 'h2',
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  as?: 'h2' | 'h3';
}) {
  return (
    <div className="mb-8 max-w-2xl">
      {eyebrow && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-300">
          {eyebrow}
        </p>
      )}
      <As className="font-display text-2xl font-bold text-night-900 sm:text-3xl dark:text-white">{title}</As>
      {subtitle && <p className="mt-3 text-night-700/80 dark:text-paper-200/80">{subtitle}</p>}
    </div>
  );
}
