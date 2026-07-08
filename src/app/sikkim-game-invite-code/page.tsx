import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { PageHero } from '@/components/layout/PageHero';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { CtaBand } from '@/components/home/CtaBand';
import { CtaButton } from '@/components/ui/Button';
import { TicketIcon, ShieldIcon, UsersIcon } from '@/components/icons';
import { inviteCodeFaqs, inviteCodeSteps } from '@/lib/content/inviteCode';
import { SITE } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'Sikkim Game Invite Code — How It Works & Where to Enter It',
  description:
    'Understand how the Sikkim Game invite code works, where to enter it during registration, and how to tell a genuine code from a scam.',
  path: '/sikkim-game-invite-code',
  keywords: ['Sikkim Game Invite Code', 'Sikkim Game Referral Code'],
});

export default function InviteCodePage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'Invite Code', path: '/sikkim-game-invite-code' }]} />
      <PageHero
        eyebrow="Sikkim Game Invite Code"
        title="Sikkim Game Invite Code: What It Is & How to Use It"
        intro="Invite codes connect a new account to an existing player or campaign. Here's exactly how they work, where to enter one, and how to avoid invite code scams."
      />

      <Section>
        <SectionHeading eyebrow="How it works" title="Understanding the invite code system" />
        <div className="grid gap-5 sm:grid-cols-3">
          <Card>
            <TicketIcon className="h-8 w-8 text-brand-600 dark:text-brand-400" />
            <h3 className="mt-3 text-base font-semibold text-night-900 dark:text-white">What it does</h3>
            <p className="mt-2 text-sm text-night-700/80 dark:text-paper-200/80">
              An invite code links your new account to whoever shared it, which can unlock a
              welcome bonus depending on the current promotion.
            </p>
          </Card>
          <Card>
            <UsersIcon className="h-8 w-8 text-brand-600 dark:text-brand-400" />
            <h3 className="mt-3 text-base font-semibold text-night-900 dark:text-white">Where to enter it</h3>
            <p className="mt-2 text-sm text-night-700/80 dark:text-paper-200/80">
              Look for an &quot;Invite Code&quot; or &quot;Referral Code&quot; field on the registration screen
              and paste it exactly as shared, with no extra spaces.
            </p>
          </Card>
          <Card>
            <ShieldIcon className="h-8 w-8 text-brand-600 dark:text-brand-400" />
            <h3 className="mt-3 text-base font-semibold text-night-900 dark:text-white">Staying safe</h3>
            <p className="mt-2 text-sm text-night-700/80 dark:text-paper-200/80">
              A genuine code never requires a payment to use. Ignore anyone asking you to pay a fee
              or share an OTP to &quot;activate&quot; one.
            </p>
          </Card>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <CtaButton href={SITE.registerUrl} variant="primary" size="lg">
            Register &amp; Add Invite Code
          </CtaButton>
          <CtaButton href="/sikkim-game-gift-code" external={false} variant="secondary" size="lg">
            Looking for Gift Codes?
          </CtaButton>
        </div>
      </Section>

      <Section className="border-t border-night-900/5 bg-paper-100/70 dark:border-white/5 dark:bg-night-900/40">
        <SectionHeading eyebrow="Walkthrough" title="Using an invite code, step by step" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {inviteCodeSteps.map((step, index) => (
            <div key={step.title} className="rounded-2xl border border-night-900/10 bg-white p-5 dark:border-white/10 dark:bg-night-800/50">
              <span className="font-display text-2xl font-extrabold text-brand-600 dark:text-brand-400">{index + 1}</span>
              <h3 className="mt-2 text-sm font-semibold text-night-900 dark:text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-night-700/80 dark:text-paper-200/80">{step.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-night-700/70 dark:text-paper-300/70">
          It is easy to confuse invite codes with gift codes since both are short strings entered
          in-app. An invite code is tied to registration and referral tracking, while a gift code
          is redeemed afterward from a rewards section to claim a specific bonus — see our{' '}
          <CtaButton href="/sikkim-game-gift-code" external={false} variant="ghost" size="md" className="px-0" showArrow={false}>
            Gift Code guide
          </CtaButton>{' '}
          for that process.
        </p>
      </Section>

      <Section id="faq">
        <SectionHeading eyebrow="FAQs" title="Sikkim Game Invite Code — Frequently Asked Questions" />
        <FaqAccordion items={inviteCodeFaqs} />
      </Section>

      <Section>
        <CtaBand
          title="Have an invite code ready?"
          subtitle="Register now and enter it during sign-up to check for available bonuses."
        />
      </Section>
    </>
  );
}
