import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { PageHero } from '@/components/layout/PageHero';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { CtaBand } from '@/components/home/CtaBand';
import { CtaButton } from '@/components/ui/Button';
import { GiftIcon, ShieldIcon } from '@/components/icons';
import { dailyBonusFaqs, dailyBonusPoints } from '@/lib/content/dailyBonus';
import { SITE } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'Sikkim Game Daily Bonus — Check-In Rewards Explained',
  description:
    'How the Sikkim Game daily check-in bonus works, where to claim it, and what to know before it affects your budget.',
  path: '/sikkim-game-daily-bonus',
  keywords: ['Sikkim Game Daily Bonus', 'Sikkim Game Check-In Bonus', 'Sikkim Game Daily Reward'],
});

export default function DailyBonusPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'Daily Bonus', path: '/sikkim-game-daily-bonus' }]} />
      <PageHero
        eyebrow="Sikkim Game Daily Bonus"
        title="Sikkim Game Daily Bonus: How Check-In Rewards Work"
        intro="A small daily check-in reward is common on platforms like this. Here's how it typically works, and how to claim it without letting it drive bigger spending."
      />

      <Section>
        <div className="grid gap-5 sm:grid-cols-3">
          {dailyBonusPoints.map((point) => (
            <Card key={point.title}>
              <GiftIcon className="h-8 w-8 text-brand-600 dark:text-brand-400" />
              <h3 className="mt-3 text-base font-semibold text-night-900 dark:text-white">{point.title}</h3>
              <p className="mt-2 text-sm text-night-700/80 dark:text-paper-200/80">{point.body}</p>
            </Card>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <CtaButton href={SITE.registerUrl} variant="primary" size="lg">
            Register &amp; Check In
          </CtaButton>
          <CtaButton href="/sikkim-game-gift-code" external={false} variant="secondary" size="lg">
            Have a Gift Code Too?
          </CtaButton>
        </div>
      </Section>

      <Section className="border-t border-night-900/5 bg-paper-100/70 dark:border-white/5 dark:bg-night-900/40">
        <SectionHeading eyebrow="Keep perspective" title="A bonus, not a strategy" />
        <Card glass className="max-w-3xl">
          <ShieldIcon className="h-8 w-8 text-brand-600 dark:text-brand-400" />
          <p className="mt-3 text-sm leading-relaxed text-night-700/80 dark:text-paper-200/80">
            A free daily check-in is harmless to claim, but it should never influence how much you
            choose to deposit or play. Treat it purely as a small extra on top of a budget you had
            already decided on.
          </p>
        </Card>
      </Section>

      <Section id="faq">
        <SectionHeading eyebrow="FAQs" title="Sikkim Game Daily Bonus — Frequently Asked Questions" />
        <FaqAccordion items={dailyBonusFaqs} />
      </Section>

      <Section>
        <CtaBand />
      </Section>
    </>
  );
}
