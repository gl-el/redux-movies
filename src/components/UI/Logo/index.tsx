import cx from 'clsx';
import s from './Logo.module.scss';

export function Logo({ className }: { className?: string }) {
  return <h1 className={cx(s.logo, className)}>🍿 Movies</h1>;
}
