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
import { giftCodeFaqs, giftCodeSteps } from '@/lib/content/giftCode';

export const metadata: Metadata = buildMetadata({
  title: 'Sikkim Game Gift Code — How to Redeem Bonus Codes',
  description:
    'Learn how Sikkim Game gift codes work, exactly where to redeem them in the app, and how to tell a real code from a scam.',
  path: '/sikkim-game-gift-code',
  keywords: ['Sikkim Game Gift Code', 'Sikkim Game Redeem Code'],
});

export default function GiftCodePage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'Gift Code', path: '/sikkim-game-gift-code' }]} />
      <PageHero
        eyebrow="Sikkim Game Gift Code"
        title="Sikkim Game Gift Code: How to Redeem It Correctly"
        intro="Gift codes unlock a bonus reward when redeemed the right way. Here's how the process works and how to spot a fake code scam before it costs you anything."
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Redemption steps" title="How to redeem a gift code" />
            <ol className="space-y-4">
              {giftCodeSteps.map((step, index) => (
                <li key={step} className="flex gap-3 rounded-xl border border-night-900/10 bg-white p-4 dark:border-white/10 dark:bg-night-800/50">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-500/15 text-xs font-bold text-brand-700 dark:bg-brand-500/20 dark:text-brand-300">
                    {index + 1}
                  </span>
                  <p className="text-sm text-night-700/80 dark:text-paper-200/80">{step}</p>
                </li>
              ))}
            </ol>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaButton variant="primary" size="lg">
                <GiftIcon className="h-4 w-4" /> Open App &amp; Redeem
              </CtaButton>
              <CtaButton href="/sikkim-game-invite-code" external={false} variant="secondary" size="lg">
                Invite Code Guide
              </CtaButton>
            </div>
          </div>
          <Card glass className="h-fit">
            <ShieldIcon className="h-8 w-8 text-brand-600 dark:text-brand-400" />
            <h3 className="mt-3 text-base font-semibold text-night-900 dark:text-white">Spotting a fake gift code offer</h3>
            <ul className="mt-3 space-y-2 text-sm text-night-700/80 dark:text-paper-200/80">
              <li>• Asked to pay a fee to &quot;activate&quot; the code — always a red flag.</li>
              <li>• Asked for your password or OTP to &quot;verify&quot; the code — never legitimate.</li>
              <li>• Promises of guaranteed huge winnings tied to a single code.</li>
              <li>• Links sent through random SMS or social media DMs.</li>
            </ul>
          </Card>
        </div>
      </Section>

      <Section id="faq" className="border-t border-night-900/5 bg-paper-100/70 dark:border-white/5 dark:bg-night-900/40">
        <SectionHeading eyebrow="FAQs" title="Sikkim Game Gift Code — Frequently Asked Questions" />
        <FaqAccordion items={giftCodeFaqs} />
      </Section>

      <Section>
        <CtaBand
          title="Got a gift code to redeem?"
          subtitle="Log in to the official app and redeem it from the rewards section."
        />
      </Section>
    </>
  );
}
