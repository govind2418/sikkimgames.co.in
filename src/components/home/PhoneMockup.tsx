import Image from 'next/image';
import appIcon from '../../../public/images/brand/app-icon-512.png';
import { GridIcon, PaletteIcon, GiftIcon, TicketIcon } from '@/components/icons';

export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[280px]">
      <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-brand-400/25 blur-3xl" aria-hidden />
      <div className="rounded-[2.5rem] border border-night-900/10 bg-white p-3 shadow-card dark:border-white/15 dark:bg-night-900 dark:shadow-card-dark">
        <div className="rounded-[2rem] bg-gradient-to-b from-paper-100 to-white p-5 dark:from-night-800 dark:to-night-950">
          <div className="flex flex-col items-center pb-6 pt-4">
            <Image
              src={appIcon}
              alt="Sikkim Game app icon"
              width={72}
              height={72}
              className="rounded-2xl shadow-glow"
            />
            <p className="mt-3 text-sm font-semibold text-night-900 dark:text-white">Sikkim Game</p>
            <p className="text-xs text-night-700/60 dark:text-paper-300/60">Illustrative app preview</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <MockTile icon={<GridIcon className="h-5 w-5" />} label="Wingo" />
            <MockTile icon={<PaletteIcon className="h-5 w-5" />} label="Colour" />
            <MockTile icon={<TicketIcon className="h-5 w-5" />} label="Invite" />
            <MockTile icon={<GiftIcon className="h-5 w-5" />} label="Gift Code" />
          </div>
        </div>
      </div>
    </div>
  );
}

function MockTile({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-xl border border-night-900/10 bg-paper-100 py-4 text-brand-600 dark:border-white/10 dark:bg-white/5 dark:text-brand-400">
      {icon}
      <span className="text-[11px] font-medium text-night-700/80 dark:text-paper-300/80">{label}</span>
    </div>
  );
}
