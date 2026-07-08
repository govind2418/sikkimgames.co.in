import type { FaqItem } from '@/lib/schema';

export const downloadFaqs: FaqItem[] = [
  {
    question: 'How do I get the Sikkim Game APK?',
    answer:
      'Follow the official download link, allow your browser or file manager to install the downloaded file when prompted, then open it to complete installation. Stick to the official source rather than third-party app listings.',
  },
  {
    question: 'Is the APK file actually safe to run?',
    answer:
      'It is when it comes from the official link. Mirror sites sometimes repackage modified files. If your phone flags the file as unrecognized, double-check the source before continuing.',
  },
  {
    question: 'The install button is greyed out or blocked — why?',
    answer:
      'Android blocks installs from unknown sources by default on most phones. Go to Settings > Security (or Apps), enable "Install unknown apps" for the browser you used, then retry.',
  },
  {
    question: 'Is there an iPhone version?',
    answer:
      'Platforms in this category typically ship an Android APK plus a mobile-friendly website rather than a native iOS App Store listing. iPhone users can generally use the web version in Safari or Chrome.',
  },
  {
    question: 'Do I have to install the app, or can I just use the site?',
    answer:
      'Both routes usually work. The app tends to feel a little smoother and can send notifications; the website needs no installation step at all.',
  },
];

export const downloadSteps = [
  {
    title: 'Start from the official link',
    body: 'Use the button on this page rather than searching app stores, where clone listings and fake apps sometimes surface.',
  },
  {
    title: 'Allow the install prompt',
    body: 'Android will ask permission to install from an unknown source the first time — approve it only for the browser or file manager you used to download.',
  },
  {
    title: 'Open the freshly installed app',
    body: "You'll land on the login or register screen depending on whether you already have an account.",
  },
  {
    title: 'Check back for updates',
    body: 'Revisit this page occasionally for newer APK builds — outdated versions are a common source of login glitches and missing features.',
  },
];
