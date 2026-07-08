import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { PageHero } from '@/components/layout/PageHero';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { CtaBand } from '@/components/home/CtaBand';
import { CtaButton } from '@/components/ui/Button';
import { UsersIcon, CoinsIcon, ShieldIcon } from '@/components/icons';
import { referralBonusFaqs, referralBonusPoints } from '@/lib/content/referralBonus';
import { SITE } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'Sikkim Game Referral Bonus — Refer & Earn Explained',
  description:
    'How the Sikkim Game refer & earn program works, where to find your referral code, and what to check before counting on referral income.',
  path: '/sikkim-game-referral-bonus',
  keywords: ['Sikkim Game Referral Bonus', 'Sikkim Game Refer and Earn', 'Sikkim Game Referral Code'],
});

export default function ReferralBonusPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'Referral Bonus', path: '/sikkim-game-referral-bonus' }]} />
      <PageHero
        eyebrow="Sikkim Game Referral Bonus"
        title="Sikkim Game Referral Bonus: How Refer & Earn Works"
        intro="Sharing your invite code with friends can unlock referral rewards. Here's how the program generally works and what to verify before relying on it."
      />

      <Section>
        <SectionHeading eyebrow="The referral flow" title="How refer & earn typically works" />
        <div className="grid gap-5 sm:grid-cols-3">
          {referralBonusPoints.map((point, index) => (
            <Card key={point.title}>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-500/15 text-sm font-bold text-brand-700 dark:bg-brand-500/20 dark:text-brand-300">
                {index + 1}
              </span>
              <h3 className="mt-3 text-base font-semibold text-night-900 dark:text-white">{point.title}</h3>
              <p className="mt-2 text-sm text-night-700/80 dark:text-paper-200/80">{point.body}</p>
            </Card>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <CtaButton href={SITE.registerUrl} variant="primary" size="lg">
            <UsersIcon className="h-4 w-4" /> Register &amp; Get Your Code
          </CtaButton>
          <CtaButton href="/sikkim-game-invite-code" external={false} variant="secondary" size="lg">
            Invite Code Guide
          </CtaButton>
        </div>
      </Section>

      <Section className="border-t border-night-900/5 bg-paper-100/70 dark:border-white/5 dark:bg-night-900/40">
        <SectionHeading eyebrow="Set expectations" title="What referral income is — and isn't" />
        <div className="grid gap-5 sm:grid-cols-2">
          <Card glass>
            <CoinsIcon className="h-8 w-8 text-brand-600 dark:text-brand-400" />
            <h3 className="mt-3 text-base font-semibold text-night-900 dark:text-white">Not a guaranteed income</h3>
            <p className="mt-2 text-sm text-night-700/80 dark:text-paper-200/80">
              Referral commissions depend on real people signing up and staying active under
              whatever rules apply at the time — treat it as a possible small perk, not a job.
            </p>
          </Card>
          <Card glass>
            <ShieldIcon className="h-8 w-8 text-brand-600 dark:text-brand-400" />
            <h3 className="mt-3 text-base font-semibold text-night-900 dark:text-white">Never pay to refer</h3>
            <p className="mt-2 text-sm text-night-700/80 dark:text-paper-200/80">
              Sharing your own code should always be free. Anyone charging a fee to &quot;unlock&quot;
              referral earnings is running a scam, not a bonus program.
            </p>
          </Card>
        </div>
      </Section>

      <Section id="faq">
        <SectionHeading eyebrow="FAQs" title="Sikkim Game Referral Bonus — Frequently Asked Questions" />
        <FaqAccordion items={referralBonusFaqs} />
      </Section>

      <Section>
        <CtaBand
          title="Ready to start referring?"
          subtitle="Register, find your code in the app, and share it with people genuinely interested."
        />
      </Section>
    </>
  );
}
