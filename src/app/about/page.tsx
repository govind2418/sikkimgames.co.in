import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { PageHero } from '@/components/layout/PageHero';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { CtaBand } from '@/components/home/CtaBand';
import { ShieldIcon, ZapIcon, UsersIcon } from '@/components/icons';
import { aboutFaqs } from '@/lib/content/about';
import { DISCLAIMER } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: 'About Sikkim Game — Who We Are',
  description:
    'Learn about sikkimgames.co.in: an independent Sikkim Game player guide covering login, registration, downloads, and game explainers.',
  path: '/about',
  keywords: ['About Sikkim Game', 'Sikkim Game Guide'],
});

export default function AboutPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }]} />
      <PageHero
        eyebrow="About Us"
        title="About the Sikkim Game Players Guide"
        intro="sikkimgames.co.in exists to make Sikkim Game information easy to find, accurate, and free of clutter. Here's who we are and how this site works."
      />

      <Section>
        <div className="max-w-3xl space-y-5 text-sm leading-relaxed text-night-700/80 dark:text-paper-200/80">
          <p>
            Searching for &quot;Sikkim Game&quot; often turns up scattered, outdated, or overly
            promotional pages. We built sikkimgames.co.in as a single, fast-loading guide covering
            exactly what players look for: how to log in, how to register, where to get the app,
            how bonus codes work, and plain explanations of the Wingo and Colour Prediction game
            modes.
          </p>
          <p>
            This site is independent and unofficial. We are not the game developer or operator,
            we do not process registrations, deposits or withdrawals, and we are not affiliated
            with or endorsed by the Government of Sikkim or any state authority — the name
            reflects common player terminology, not an official government connection.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          <Card>
            <ZapIcon className="h-8 w-8 text-brand-600 dark:text-brand-400" />
            <h3 className="mt-3 text-base font-semibold text-night-900 dark:text-white">Our goal</h3>
            <p className="mt-2 text-sm text-night-700/80 dark:text-paper-200/80">
              Fast, accurate, jargon-free guides so you spend less time searching and more time
              informed.
            </p>
          </Card>
          <Card>
            <ShieldIcon className="h-8 w-8 text-brand-600 dark:text-brand-400" />
            <h3 className="mt-3 text-base font-semibold text-night-900 dark:text-white">Our approach</h3>
            <p className="mt-2 text-sm text-night-700/80 dark:text-paper-200/80">
              Transparent labelling of what we are (a player guide/affiliate resource) and what we
              are not (the operator).
            </p>
          </Card>
          <Card>
            <UsersIcon className="h-8 w-8 text-brand-600 dark:text-brand-400" />
            <h3 className="mt-3 text-base font-semibold text-night-900 dark:text-white">Who it&apos;s for</h3>
            <p className="mt-2 text-sm text-night-700/80 dark:text-paper-200/80">
              Anyone searching for Sikkim Game login, registration, download, or game rule
              information.
            </p>
          </Card>
        </div>
      </Section>

      <Section className="border-t border-night-900/5 bg-paper-100/70 dark:border-white/5 dark:bg-night-900/40">
        <SectionHeading eyebrow="Full disclosure" title="Our disclaimer" />
        <Card glass className="max-w-3xl text-sm leading-relaxed text-night-700/80 dark:text-paper-200/80">
          {DISCLAIMER}
        </Card>
      </Section>

      <Section id="faq">
        <SectionHeading eyebrow="FAQs" title="About Sikkim Game — Frequently Asked Questions" />
        <FaqAccordion items={aboutFaqs} />
      </Section>

      <Section>
        <CtaBand />
      </Section>
    </>
  );
}
