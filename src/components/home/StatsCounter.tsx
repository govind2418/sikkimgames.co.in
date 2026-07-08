import { Counter } from '@/components/ui/Counter';

const stats = [
  { target: 18, suffix: '+', label: 'Dedicated Guides' },
  { target: 100, suffix: '%', label: 'Independent Content' },
  { target: 24, suffix: '/7', label: 'Guides Available' },
  { target: 5, suffix: ' min', label: 'Quick Setup Read' },
];

export function StatsCounter() {
  return (
    <div className="border-y border-night-900/10 bg-paper-100 dark:border-white/10 dark:bg-night-900/60">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-display text-3xl font-extrabold text-night-900 sm:text-4xl dark:text-white">
              <Counter target={stat.target} suffix={stat.suffix} />
            </p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wide text-night-700/70 dark:text-paper-300/70">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
