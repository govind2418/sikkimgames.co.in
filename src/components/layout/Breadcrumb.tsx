import Link from 'next/link';
import { JsonLd, breadcrumbSchema, type BreadcrumbItem } from '@/lib/schema';

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-4 pt-6 sm:px-6">
      <JsonLd data={breadcrumbSchema(items)} />
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-night-700/70 dark:text-paper-300/70">
        {items.map((item, index) => (
          <li key={item.path} className="flex items-center gap-1.5">
            {index > 0 && <span className="text-night-900/30 dark:text-white/30">/</span>}
            {index === items.length - 1 ? (
              <span aria-current="page" className="text-night-900 dark:text-paper-100">
                {item.name}
              </span>
            ) : (
              <Link href={item.path} className="hover:text-brand-600 dark:hover:text-brand-300">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
