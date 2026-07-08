import { Section, SectionHeading } from '@/components/ui/Section';
import { CtaButton } from '@/components/ui/Button';

const steps = [
  {
    step: '01',
    title: 'Get the App',
    body: 'Visit our Download page for the safest route to the official Sikkim Game APK or web app link for your device.',
    href: '/download',
    linkText: 'Sikkim Game Download Guide',
  },
  {
    step: '02',
    title: 'Create an Account',
    body: 'Follow our Register guide to finish sign-up on the official platform with your mobile number in under a minute.',
    href: '/register',
    linkText: 'Sikkim Game Register Guide',
  },
  {
    step: '03',
    title: 'Apply a Bonus Code',
    body: 'Check our Invite Code and Gift Code guides to see how bonus codes work and exactly where to enter them after login.',
    href: '/sikkim-game-invite-code',
    linkText: 'Sikkim Game Invite Code Guide',
  },
  {
    step: '04',
    title: 'Learn the Game Modes',
    body: 'Read our Wingo and Colour Prediction explainers to understand round timing and result format before you play.',
    href: '/sikkim-wingo-prediction',
    linkText: 'Sikkim Wingo Prediction Guide',
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="border-t border-night-900/5 bg-paper-100/70 dark:border-white/5 dark:bg-night-900/40">
      <SectionHeading
        eyebrow="Getting started"
        title="Four steps to get going on Sikkim Game"
        subtitle="A simple path from download to your first round."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map(({ step, title, body, href, linkText }) => (
          <div key={step} className="rounded-2xl border border-night-900/10 bg-white p-6 dark:border-white/10 dark:bg-night-800/50">
            <span className="font-display text-3xl font-extrabold text-brand-600 dark:text-brand-400">{step}</span>
            <h3 className="mt-3 text-base font-semibold text-night-900 dark:text-white">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-night-700/80 dark:text-paper-200/80">{body}</p>
            <CtaButton href={href} external={false} variant="ghost" size="md" className="mt-4 px-0">
              {linkText}
            </CtaButton>
          </div>
        ))}
      </div>
    </Section>
  );
}
