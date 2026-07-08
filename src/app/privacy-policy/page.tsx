import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { PageHero } from '@/components/layout/PageHero';
import { Section, SectionHeading } from '@/components/ui/Section';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { privacyFaqs, privacySections } from '@/lib/content/privacy';

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy',
  description:
    'Read the sikkimgames.co.in privacy policy: what information we collect, how cookies are used, and how third-party links are handled.',
  path: '/privacy-policy',
  keywords: ['Sikkim Game Privacy Policy'],
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumb
        items={[{ name: 'Home', path: '/' }, { name: 'Privacy Policy', path: '/privacy-policy' }]}
      />
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        intro="This page explains how sikkimgames.co.in handles visitor information. It does not cover the official Sikkim Game operator's app or platform."
      />

      <Section>
        <div className="max-w-3xl space-y-8">
          {privacySections.map((section) => (
            <div key={section.title}>
              <h2 className="text-lg font-semibold text-night-900 dark:text-white">{section.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-night-700/80 dark:text-paper-200/80">{section.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="faq" className="border-t border-night-900/5 bg-paper-100/70 dark:border-white/5 dark:bg-night-900/40">
        <SectionHeading eyebrow="FAQs" title="Privacy Policy — Frequently Asked Questions" />
        <FaqAccordion items={privacyFaqs} />
      </Section>
    </>
  );
}
