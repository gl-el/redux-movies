import { ReactNode } from 'react';
import s from './Main.module.scss';

export function Main({ children }: { children: ReactNode }) {
  return <main className={s.main}>{children}</main>;
}
