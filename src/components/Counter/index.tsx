import cx from 'clsx';
import s from './Counter.module.scss';

export function Counter({ className, total = 0 }: { className?: string; total: number }) {
  return <div className={cx(s.counter, className)}>Total {total} results</div>;
}
