import { Section, SectionHeading } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { ZapIcon, ShieldIcon, SmartphoneIcon, GiftIcon, UsersIcon, GridIcon } from '@/components/icons';

const benefits = [
  {
    icon: ZapIcon,
    title: 'Quick, Clutter-Free Guides',
    body: 'Every guide is built to load instantly and get to the point fast — no pop-ups, no autoplay video, no bloated pages eating your mobile data.',
  },
  {
    icon: ShieldIcon,
    title: 'Independent & Clearly Labelled',
    body: 'We state plainly that this is an unofficial player guide, not the operator, so you always know where your account and funds are actually handled.',
  },
  {
    icon: SmartphoneIcon,
    title: 'Careful Download Instructions',
    body: 'Numbered, screenshot-free steps for finding and installing the Android APK safely, without wading through cluttered search results.',
  },
  {
    icon: GiftIcon,
    title: 'Invite & Gift Codes Decoded',
    body: 'Understand how invite codes and gift codes are structured, where they get applied, and what to double-check before trusting a code shared online.',
  },
  {
    icon: GridIcon,
    title: 'Wingo & Colour Prediction Basics',
    body: 'Plain-language breakdowns of how Wingo rounds and Colour Prediction outcomes are structured, so you understand the format before you play.',
  },
  {
    icon: UsersIcon,
    title: 'Organised Around Real Questions',
    body: 'Pages are structured around what players actually search for — login errors, sign-up steps, bonus codes, and game rules — all in one place.',
  },
];

export function Benefits() {
  return (
    <Section id="benefits">
      <SectionHeading
        eyebrow="Why players use this guide"
        title="A clearer way to research Sikkim Game"
        subtitle="Built to be fast and easy to scan first — every page helps you reach the official platform informed, not confused."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map(({ icon: Icon, title, body }) => (
          <Card key={title}>
            <Icon className="h-8 w-8 text-brand-600 dark:text-brand-400" />
            <h3 className="mt-4 text-lg font-semibold text-night-900 dark:text-white">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-night-700/80 dark:text-paper-200/80">{body}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
