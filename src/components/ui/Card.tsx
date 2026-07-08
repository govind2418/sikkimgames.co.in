export function Card({
  children,
  className = '',
  glass = false,
}: {
  children: React.ReactNode;
  className?: string;
  glass?: boolean;
}) {
  const bg = glass
    ? 'bg-paper-100/80 dark:bg-white/5 dark:backdrop-blur-sm'
    : 'bg-white dark:bg-night-800/60';
  return (
    <div
      className={`rounded-2xl border border-night-900/10 dark:border-white/10 ${bg} p-6 shadow-card transition-all duration-200 hover:border-brand-500/50 hover:-translate-y-0.5 dark:shadow-card-dark ${className}`}
    >
      {children}
    </div>
  );
}
