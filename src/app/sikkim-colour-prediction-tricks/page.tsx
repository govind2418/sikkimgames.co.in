import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { PageHero } from '@/components/layout/PageHero';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { CtaBand } from '@/components/home/CtaBand';
import { CtaButton } from '@/components/ui/Button';
import { ColourWheelIllustration } from '@/components/home/ColourWheel';
import { ShieldIcon, ZapIcon, GridIcon } from '@/components/icons';
import { colourPredictionTricksFaqs, colourPredictionTricksPoints } from '@/lib/content/colourPredictionTricks';

export const metadata: Metadata = buildMetadata({
  title: 'Sikkim Colour Prediction Tricks — Rules Explained Honestly',
  description:
    'A plain-language guide to Sikkim Game Colour Prediction: how rounds actually work, why "tricks" don\'t beat chance, and the scams to avoid.',
  path: '/sikkim-colour-prediction-tricks',
  keywords: ['Sikkim Colour Prediction Tricks', 'Sikkim Game Colour Prediction', 'Sikkim Colour Prediction'],
});

export default function ColourPredictionTricksPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: 'Home', path: '/' },
          { name: 'Colour Prediction Tricks', path: '/sikkim-colour-prediction-tricks' },
        ]}
      />
      <PageHero
        eyebrow="Sikkim Colour Prediction Tricks"
        title="Sikkim Colour Prediction Tricks: What Actually Helps"
        intro="Colour Prediction is one of the most searched Sikkim Game modes. Here's a clear breakdown of how rounds work, what genuinely helps, and the scams built around fake 'tricks'."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_280px] lg:items-start">
          <div>
            <SectionHeading eyebrow="How it works" title="Understanding a Colour Prediction round" />
            <div className="space-y-4 text-sm leading-relaxed text-night-700/80 dark:text-paper-200/80">
              <p>
                In each round, players choose from a small set of colour options before a countdown
                ends. Once the timer runs out, the round closes and a result is revealed. Depending
                on the colour picked and the platform&apos;s current payout table, a winning pick
                returns a multiple of the stake, while other picks lose the amount wagered.
              </p>
              <p>
                The exact colour set, timer length, minimum bet, and payout multipliers are all
                controlled by the official platform and can change over time — always check the
                live in-app rules rather than relying on outdated screenshots or any third-party
                explanation, including this one.
              </p>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {colourPredictionTricksPoints.map((point) => (
                <Card key={point.title}>
                  <ZapIcon className="h-7 w-7 text-brand-600 dark:text-brand-400" />
                  <h3 className="mt-3 text-base font-semibold text-night-900 dark:text-white">{point.title}</h3>
                  <p className="mt-2 text-sm text-night-700/80 dark:text-paper-200/80">{point.body}</p>
                </Card>
              ))}
            </div>
          </div>
          <ColourWheelIllustration />
        </div>
      </Section>

      <Section className="border-t border-night-900/5 bg-paper-100/70 dark:border-white/5 dark:bg-night-900/40">
        <SectionHeading eyebrow="Important warning" title="Watch out for Colour Prediction scams" />
        <Card glass className="max-w-3xl">
          <ShieldIcon className="h-8 w-8 text-brand-600 dark:text-brand-400" />
          <p className="mt-3 text-sm leading-relaxed text-night-700/80 dark:text-paper-200/80">
            This game category attracts a specific scam pattern: paid &quot;prediction formulas&quot;,
            &quot;VIP signal groups&quot;, or bots claiming to guarantee wins. No formula can reliably
            beat a chance-based system, and anyone selling one is looking to take your money, not
            help you win it. Never share your login, OTP, or banking details with such groups.
          </p>
        </Card>
      </Section>

      <Section id="faq">
        <SectionHeading
          eyebrow="FAQs"
          title="Sikkim Colour Prediction Tricks — Frequently Asked Questions"
        />
        <FaqAccordion items={colourPredictionTricksFaqs} />
      </Section>

      <Section>
        <CtaBand
          title="Ready to try Colour Prediction?"
          subtitle="Register or log in on the official app, and play responsibly with limits you're comfortable with."
        />
        <div className="mt-6 flex justify-center">
          <CtaButton href="/sikkim-wingo-prediction" external={false} variant="ghost" showArrow>
            Also see: Sikkim Wingo Prediction guide
          </CtaButton>
        </div>
      </Section>
    </>
  );
}
