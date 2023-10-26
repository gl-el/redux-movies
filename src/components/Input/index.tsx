import cx from 'clsx';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import s from './Input.module.scss';

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  className?: string;
}

export function Input({ className, type = 'text', ...props }: InputProps) {
  return <input type={type} className={cx(s.input, className)} {...props} />;
}
