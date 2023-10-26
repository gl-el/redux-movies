import { ReactNode, useState } from 'react';
import s from './Box.module.scss';

export function Box({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);
  const toggleOpen = () => {
    setIsOpen((current) => !current);
  };
  return (
    <div className={s.box}>
      <button className={s.btn} onClick={toggleOpen}>
        {isOpen ? '-' : '+'}
      </button>
      {isOpen && <div className={s.content}>{children}</div>}
    </div>
  );
}
