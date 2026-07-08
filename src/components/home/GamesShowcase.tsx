import { Section, SectionHeading } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { CtaButton } from '@/components/ui/Button';
import { GridIcon, PaletteIcon } from '@/components/icons';

const games = [
  {
    icon: GridIcon,
    name: 'Wingo Prediction',
    body: 'A fast, fixed-timer number and colour round. Learn the terminology, the result cycle, and how players read patterns before each round closes.',
    href: '/sikkim-wingo-prediction',
    cta: 'Read Wingo Prediction Guide',
  },
  {
    icon: PaletteIcon,
    name: 'Colour Prediction',
    body: 'Pick a colour before the round closes and see how payouts are structured. Understand the format before trying it on the official app.',
    href: '/sikkim-colour-prediction-tricks',
    cta: 'Read Colour Prediction Guide',
  },
];

export function GamesShowcase() {
  return (
    <Section id="games">
      <SectionHeading
        eyebrow="Popular game modes"
        title="Wingo & Colour Prediction, explained simply"
        subtitle="Two of the most-searched Sikkim Game modes — here's what to know before you play."
      />
      <div className="grid gap-5 sm:grid-cols-2">
        {games.map(({ icon: Icon, name, body, href, cta }) => (
          <Card key={name} glass className="flex flex-col">
            <Icon className="h-10 w-10 text-brand-600 dark:text-brand-400" />
            <h3 className="mt-4 text-xl font-semibold text-night-900 dark:text-white">{name}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-night-700/80 dark:text-paper-200/80">{body}</p>
            <CtaButton href={href} external={false} variant="secondary" className="mt-5 self-start">
              {cta}
            </CtaButton>
          </Card>
        ))}
      </div>
    </Section>
  );
}
