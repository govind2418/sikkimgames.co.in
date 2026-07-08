import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { PageHero } from '@/components/layout/PageHero';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { CtaBand } from '@/components/home/CtaBand';
import { CtaButton } from '@/components/ui/Button';
import { WingoBoardIllustration } from '@/components/home/WingoBoard';
import { ShieldIcon, GridIcon, ZapIcon } from '@/components/icons';
import { wingoPredictionFaqs, wingoPredictionPoints } from '@/lib/content/wingoPrediction';

export const metadata: Metadata = buildMetadata({
  title: 'Sikkim Wingo Prediction — How the Game Works',
  description:
    'A plain-language guide to Sikkim Game Wingo: number, colour and size betting explained, round timers, and why paid prediction tools fall short.',
  path: '/sikkim-wingo-prediction',
  keywords: ['Sikkim Wingo Prediction', 'Sikkim Game Wingo', 'Sikkim Wingo'],
});

export default function WingoPredictionPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'Home', path: '/' }, { name: 'Wingo Prediction', path: '/sikkim-wingo-prediction' }]} />
      <PageHero
        eyebrow="Sikkim Wingo Prediction"
        title="Sikkim Wingo Prediction: How the Game Actually Works"
        intro="Wingo is one of the most popular Sikkim Game modes. Here's what the numbers, colours and size options mean, how a round plays out, and why prediction claims deserve skepticism."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_280px] lg:items-start">
          <div>
            <SectionHeading eyebrow="Game format" title="Understanding a Wingo round" />
            <div className="space-y-4 text-sm leading-relaxed text-night-700/80 dark:text-paper-200/80">
              <p>
                Each Wingo round centres on a set of numbers, typically 0–9. Before the round timer
                ends, players choose a bet type — a specific number, its associated colour, or a
                size category such as big (usually 5–9) or small (usually 0–4). When the timer hits
                zero, a result number is revealed, and payouts follow whichever bet types matched.
              </p>
              <p>
                Because rounds run back-to-back on a short timer, Wingo feels fast and continuous
                compared to slower lottery draws. That speed is exactly why setting a personal
                budget beforehand matters more than chasing losses across many quick rounds.
              </p>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {wingoPredictionPoints.map((point) => (
                <Card key={point.title}>
                  <GridIcon className="h-7 w-7 text-brand-600 dark:text-brand-400" />
                  <h3 className="mt-3 text-base font-semibold text-night-900 dark:text-white">{point.title}</h3>
                  <p className="mt-2 text-sm text-night-700/80 dark:text-paper-200/80">{point.body}</p>
                </Card>
              ))}
            </div>
          </div>
          <WingoBoardIllustration />
        </div>
      </Section>

      <Section className="border-t border-night-900/5 bg-paper-100/70 dark:border-white/5 dark:bg-night-900/40">
        <SectionHeading eyebrow="Play responsibly" title="Set limits before you play Wingo" />
        <Card glass className="max-w-3xl">
          <ShieldIcon className="h-8 w-8 text-brand-600 dark:text-brand-400" />
          <p className="mt-3 text-sm leading-relaxed text-night-700/80 dark:text-paper-200/80">
            Because rounds move quickly, it&apos;s easy to play many in a short time. Decide on a
            maximum spend before you start, and stop once you reach it regardless of recent wins or
            losses. Ignore any third party selling a paid &quot;Wingo prediction trick&quot; or
            &quot;prediction bot&quot; — results come from the platform&apos;s own system and cannot
            be reliably predicted from outside it.
          </p>
        </Card>
      </Section>

      <Section id="faq">
        <SectionHeading eyebrow="FAQs" title="Sikkim Wingo Prediction — Frequently Asked Questions" />
        <FaqAccordion items={wingoPredictionFaqs} />
      </Section>

      <Section>
        <CtaBand
          title="Ready to try Wingo?"
          subtitle="Register or log in on the official app to explore the current Wingo rounds."
        />
        <div className="mt-6 flex justify-center">
          <CtaButton href="/sikkim-colour-prediction-tricks" external={false} variant="ghost" showArrow>
            Also see: Sikkim Colour Prediction guide
          </CtaButton>
        </div>
      </Section>
    </>
  );
}
