import { JsonLd, faqPageSchema, type FaqItem } from '@/lib/schema';
import { ChevronDownIcon } from '@/components/icons';

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-night-900/10 rounded-2xl border border-night-900/10 bg-white dark:divide-white/10 dark:border-white/10 dark:bg-night-800/60">
      <JsonLd data={faqPageSchema(items)} />
      {items.map((item) => (
        <details key={item.question} className="group px-5 py-4 open:pb-4">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-medium text-night-900 marker:content-none dark:text-white">
            {item.question}
            <ChevronDownIcon className="h-5 w-5 shrink-0 text-brand-600 transition-transform duration-200 group-open:rotate-180 dark:text-brand-300" />
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-night-700/80 dark:text-paper-200/80">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
