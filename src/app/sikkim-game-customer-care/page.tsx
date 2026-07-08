import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { PageHero } from '@/components/layout/PageHero';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { CtaBand } from '@/components/home/CtaBand';
import { CtaButton } from '@/components/ui/Button';
import { PhoneCallIcon, ShieldIcon } from '@/components/icons';
import { customerCareFaqs, customerCarePoints } from '@/lib/content/customerCare';
import { SITE } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'Sikkim Game Customer Care — How to Reach Support',
  description:
    'How to reach genuine Sikkim Game customer care for account, deposit and withdrawal issues, and how to avoid fake support scams.',
  path: '/sikkim-game-customer-care',
  keywords: ['Sikkim Game Customer Care', 'Sikkim Game Support', 'Sikkim Game Helpline'],
});

export default function CustomerCarePage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'Customer Care', path: '/sikkim-game-customer-care' }]} />
      <PageHero
        eyebrow="Sikkim Game Customer Care"
        title="Sikkim Game Customer Care: The Right Way to Get Help"
        intro="Account, deposit and withdrawal issues need official support — not a third-party page. Here's how to reach genuine help and avoid fake 'support' scams."
      />

      <Section>
        <div className="grid gap-5 sm:grid-cols-3">
          {customerCarePoints.map((point) => (
            <Card key={point.title}>
              <PhoneCallIcon className="h-8 w-8 text-brand-600 dark:text-brand-400" />
              <h3 className="mt-3 text-base font-semibold text-night-900 dark:text-white">{point.title}</h3>
              <p className="mt-2 text-sm text-night-700/80 dark:text-paper-200/80">{point.body}</p>
            </Card>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <CtaButton href={SITE.registerUrl} variant="primary" size="lg">
            Open Official App
          </CtaButton>
          <CtaButton href="/contact" external={false} variant="secondary" size="lg">
            Contact This Site Instead
          </CtaButton>
        </div>
      </Section>

      <Section className="border-t border-night-900/5 bg-paper-100/70 dark:border-white/5 dark:bg-night-900/40">
        <SectionHeading eyebrow="Important" title="We are not the support team" />
        <Card glass className="max-w-3xl">
          <ShieldIcon className="h-8 w-8 text-brand-600 dark:text-brand-400" />
          <p className="mt-3 text-sm leading-relaxed text-night-700/80 dark:text-paper-200/80">
            sikkimgames.co.in is an independent guide. We cannot see your account, resolve a stuck
            withdrawal, or issue refunds. For anything account-related, use the Help or Support
            section inside the official app — it is the only channel that can actually act on your
            request.
          </p>
        </Card>
      </Section>

      <Section id="faq">
        <SectionHeading eyebrow="FAQs" title="Sikkim Game Customer Care — Frequently Asked Questions" />
        <FaqAccordion items={customerCareFaqs} />
      </Section>

      <Section>
        <CtaBand />
      </Section>
    </>
  );
}
