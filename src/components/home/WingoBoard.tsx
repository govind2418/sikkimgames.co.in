const numbers = Array.from({ length: 10 }, (_, i) => i);

export function WingoBoardIllustration() {
  return (
    <div className="mx-auto w-full max-w-xs rounded-2xl border border-night-900/10 bg-white p-5 dark:border-white/10 dark:bg-night-800/60">
      <div className="grid grid-cols-5 gap-2">
        {numbers.map((n) => (
          <span
            key={n}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-night-900/10 bg-paper-100 text-sm font-bold text-brand-700 dark:border-white/10 dark:bg-night-900 dark:text-brand-300"
          >
            {n}
          </span>
        ))}
      </div>
      <p className="mt-4 text-center text-[11px] text-night-700/60 dark:text-paper-300/60">
        Illustrative example only — actual Wingo number sets and timers are set by the official app.
      </p>
    </div>
  );
}
