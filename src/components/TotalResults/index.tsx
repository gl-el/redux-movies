import cx from 'clsx';
import s from './TotalResults.module.scss';

export function TotalResults({ className, total = 0 }: { className?: string; total: number }) {
  return <div className={cx(s.counter, className)}>Total {total} results</div>;
}
