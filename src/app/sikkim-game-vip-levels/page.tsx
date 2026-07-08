import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { PageHero } from '@/components/layout/PageHero';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { CtaBand } from '@/components/home/CtaBand';
import { CtaButton } from '@/components/ui/Button';
import { CrownIcon, ShieldIcon } from '@/components/icons';
import { vipLevelsFaqs, vipLevelsPoints } from '@/lib/content/vipLevels';
import { SITE } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'Sikkim Game VIP Levels — Tier System Explained',
  description:
    'How the Sikkim Game VIP level system generally works, where to check your tier, and what to verify before chasing the next level.',
  path: '/sikkim-game-vip-levels',
  keywords: ['Sikkim Game VIP Levels', 'Sikkim Game VIP', 'Sikkim Game Tier System'],
});

export default function VipLevelsPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'VIP Levels', path: '/sikkim-game-vip-levels' }]} />
      <PageHero
        eyebrow="Sikkim Game VIP Levels"
        title="Sikkim Game VIP Levels: How the Tier System Works"
        intro="Many prediction and gaming platforms use a VIP tier system tied to activity. Here's how it typically works and what to check before chasing a higher level."
      />

      <Section>
        <div className="grid gap-5 sm:grid-cols-3">
          {vipLevelsPoints.map((point) => (
            <Card key={point.title}>
              <CrownIcon className="h-8 w-8 text-brand-600 dark:text-brand-400" />
              <h3 className="mt-3 text-base font-semibold text-night-900 dark:text-white">{point.title}</h3>
              <p className="mt-2 text-sm text-night-700/80 dark:text-paper-200/80">{point.body}</p>
            </Card>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <CtaButton href={SITE.registerUrl} variant="primary" size="lg">
            Check My VIP Level
          </CtaButton>
          <CtaButton href="/sikkim-game-referral-bonus" external={false} variant="secondary" size="lg">
            Referral Bonus Guide
          </CtaButton>
        </div>
      </Section>

      <Section className="border-t border-night-900/5 bg-paper-100/70 dark:border-white/5 dark:bg-night-900/40">
        <SectionHeading eyebrow="Stay grounded" title="Don't chase a tier past your budget" />
        <Card glass className="max-w-3xl">
          <ShieldIcon className="h-8 w-8 text-brand-600 dark:text-brand-400" />
          <p className="mt-3 text-sm leading-relaxed text-night-700/80 dark:text-paper-200/80">
            VIP perks are a byproduct of activity you were already planning to do, not a reason to
            deposit beyond your budget. If reaching the next tier requires spending more than you
            intended, it isn&apos;t worth it.
          </p>
        </Card>
      </Section>

      <Section id="faq">
        <SectionHeading eyebrow="FAQs" title="Sikkim Game VIP Levels — Frequently Asked Questions" />
        <FaqAccordion items={vipLevelsFaqs} />
      </Section>

      <Section>
        <CtaBand />
      </Section>
    </>
  );
}
