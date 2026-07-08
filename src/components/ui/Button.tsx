import Link from 'next/link';
import { SITE } from '@/lib/site';
import { ArrowRightIcon } from '@/components/icons';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'gold';
type ButtonSize = 'md' | 'lg';

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-600 text-white hover:bg-brand-700 shadow-glow border border-brand-700/40',
  secondary:
    'bg-white text-night-900 border border-night-900/15 hover:border-brand-500/60 hover:bg-paper-100 dark:bg-white/5 dark:text-white dark:border-white/15 dark:hover:bg-white/10',
  ghost: 'bg-transparent text-brand-700 hover:text-brand-600 border border-transparent dark:text-brand-300 dark:hover:text-white',
  gold: 'bg-gold-500 text-night-950 hover:bg-gold-400 border border-gold-600/40',
};

const sizeClasses: Record<ButtonSize, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
};

type CtaButtonProps = {
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
  external?: boolean;
  showArrow?: boolean;
  ariaLabel?: string;
};

export function CtaButton({
  href = SITE.officialUrl,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  external = true,
  showArrow = true,
  ariaLabel,
}: CtaButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 active:scale-95 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer sponsored" aria-label={ariaLabel} className={classes}>
        {children}
        {showArrow && <ArrowRightIcon className="h-4 w-4" />}
      </a>
    );
  }

  return (
    <Link href={href} aria-label={ariaLabel} className={classes}>
      {children}
      {showArrow && <ArrowRightIcon className="h-4 w-4" />}
    </Link>
  );
}
