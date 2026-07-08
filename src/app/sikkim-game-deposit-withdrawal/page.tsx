import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { PageHero } from '@/components/layout/PageHero';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { CtaBand } from '@/components/home/CtaBand';
import { CtaButton } from '@/components/ui/Button';
import { WalletIcon, ShieldIcon } from '@/components/icons';
import { depositWithdrawalFaqs, depositWithdrawalPoints } from '@/lib/content/depositWithdrawal';
import { SITE } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'Sikkim Game Minimum Deposit & Withdrawal Guide',
  description:
    'How deposits and withdrawals work on Sikkim Game, what affects processing time, and how to keep your transactions safe.',
  path: '/sikkim-game-deposit-withdrawal',
  keywords: ['Sikkim Game Minimum Deposit', 'Sikkim Game Withdrawal', 'Sikkim Game Deposit'],
});

export default function DepositWithdrawalPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'Deposit & Withdrawal', path: '/sikkim-game-deposit-withdrawal' }]} />
      <PageHero
        eyebrow="Sikkim Game Deposit & Withdrawal"
        title="Sikkim Game Deposit & Withdrawal: What to Know First"
        intro="Understand how deposits and withdrawals generally work, what can delay a payout, and how to keep every transaction on the official platform only."
      />

      <Section>
        <SectionHeading eyebrow="The basics" title="How deposits & withdrawals work" />
        <div className="grid gap-5 sm:grid-cols-3">
          {depositWithdrawalPoints.map((point) => (
            <Card key={point.title}>
              <WalletIcon className="h-8 w-8 text-brand-600 dark:text-brand-400" />
              <h3 className="mt-3 text-base font-semibold text-night-900 dark:text-white">{point.title}</h3>
              <p className="mt-2 text-sm text-night-700/80 dark:text-paper-200/80">{point.body}</p>
            </Card>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <CtaButton href={SITE.registerUrl} variant="primary" size="lg">
            Open Wallet in App
          </CtaButton>
          <CtaButton href="/sikkim-game-customer-care" external={false} variant="secondary" size="lg">
            Withdrawal Stuck? Get Help
          </CtaButton>
        </div>
      </Section>

      <Section className="border-t border-night-900/5 bg-paper-100/70 dark:border-white/5 dark:bg-night-900/40">
        <SectionHeading eyebrow="Stay safe" title="Keep every transaction inside the official app" />
        <Card glass className="max-w-3xl">
          <ShieldIcon className="h-8 w-8 text-brand-600 dark:text-brand-400" />
          <p className="mt-3 text-sm leading-relaxed text-night-700/80 dark:text-paper-200/80">
            Never enter your banking or card details through a link sent by SMS, WhatsApp, or a
            stranger claiming to speed up a withdrawal. All deposits and withdrawals should happen
            directly inside the official, verified app — nowhere else.
          </p>
        </Card>
      </Section>

      <Section id="faq">
        <SectionHeading eyebrow="FAQs" title="Sikkim Game Deposit & Withdrawal — Frequently Asked Questions" />
        <FaqAccordion items={depositWithdrawalFaqs} />
      </Section>

      <Section>
        <CtaBand />
      </Section>
    </>
  );
}
