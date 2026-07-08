import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { PageHero } from '@/components/layout/PageHero';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { CtaBand } from '@/components/home/CtaBand';
import { ShieldIcon } from '@/components/icons';
import { realOrFakeFaqs, realOrFakeChecklist } from '@/lib/content/realOrFake';
import { DISCLAIMER } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'Sikkim Game Real or Fake? A Trust & Safety Checklist',
  description:
    'Not sure if Sikkim Game is trustworthy? Here is a practical checklist for evaluating any prediction/gaming platform, and the scam patterns to watch for.',
  path: '/sikkim-game-real-or-fake',
  keywords: ['Sikkim Game Real or Fake', 'Is Sikkim Game Legit', 'Sikkim Game Trust'],
});

export default function RealOrFakePage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'Real or Fake?', path: '/sikkim-game-real-or-fake' }]} />
      <PageHero
        eyebrow="Sikkim Game Real or Fake?"
        title="Is Sikkim Game Real or Fake? How to Judge It Yourself"
        intro="We can't declare any platform officially 'safe' — no independent guide can. What we can give you is a practical checklist for evaluating it yourself, and the scam patterns to watch for."
      />

      <Section>
        <SectionHeading eyebrow="Evaluate it yourself" title="A trust & safety checklist" />
        <div className="grid gap-5 sm:grid-cols-2">
          {realOrFakeChecklist.map((item) => (
            <Card key={item.title}>
              <ShieldIcon className="h-8 w-8 text-brand-600 dark:text-brand-400" />
              <h3 className="mt-3 text-base font-semibold text-night-900 dark:text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-night-700/80 dark:text-paper-200/80">{item.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="border-t border-night-900/5 bg-paper-100/70 dark:border-white/5 dark:bg-night-900/40">
        <SectionHeading eyebrow="Full disclosure" title="Where we stand" />
        <Card glass className="max-w-3xl text-sm leading-relaxed text-night-700/80 dark:text-paper-200/80">
          {DISCLAIMER}
        </Card>
      </Section>

      <Section id="faq">
        <SectionHeading eyebrow="FAQs" title="Sikkim Game Real or Fake — Frequently Asked Questions" />
        <FaqAccordion items={realOrFakeFaqs} />
      </Section>

      <Section>
        <CtaBand
          title="Do your own research first"
          subtitle="Read our other guides, then decide for yourself whether to proceed."
        />
      </Section>
    </>
  );
}
