import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { PageHero } from '@/components/layout/PageHero';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { CtaBand } from '@/components/home/CtaBand';
import { CtaButton } from '@/components/ui/Button';
import { ShieldIcon } from '@/components/icons';
import { contactFaqs } from '@/lib/content/contact';
import { SITE } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'Contact Sikkim Game Players Guide',
  description:
    'Get in touch with sikkimgames.co.in for content questions or corrections. For account and payment issues, use official in-app support.',
  path: '/contact',
  keywords: ['Contact Sikkim Game'],
});

export default function ContactPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }]} />
      <PageHero
        eyebrow="Contact"
        title="Contact the Sikkim Game Players Guide"
        intro="Have a question about our content, or spotted something that needs updating? Reach out below."
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2">
          <Card>
            <h3 className="text-base font-semibold text-night-900 dark:text-white">Email us</h3>
            <p className="mt-2 text-sm text-night-700/80 dark:text-paper-200/80">
              For content questions, corrections, or general feedback about this site.
            </p>
            <a
              href={`mailto:${SITE.contactEmail}`}
              className="mt-4 inline-block text-sm font-semibold text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
            >
              {SITE.contactEmail}
            </a>
          </Card>
          <Card glass>
            <ShieldIcon className="h-7 w-7 text-brand-600 dark:text-brand-400" />
            <h3 className="mt-3 text-base font-semibold text-night-900 dark:text-white">Account or payment issue?</h3>
            <p className="mt-2 text-sm text-night-700/80 dark:text-paper-200/80">
              We cannot access or resolve account, deposit or withdrawal issues. Please use the
              official app&apos;s in-app support section for those requests.
            </p>
            <CtaButton variant="secondary" className="mt-4">
              Go to Official App
            </CtaButton>
          </Card>
        </div>
      </Section>

      <Section id="faq" className="border-t border-night-900/5 bg-paper-100/70 dark:border-white/5 dark:bg-night-900/40">
        <SectionHeading eyebrow="FAQs" title="Contact — Frequently Asked Questions" />
        <FaqAccordion items={contactFaqs} />
      </Section>

      <Section>
        <CtaBand />
      </Section>
    </>
  );
}
